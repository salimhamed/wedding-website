import React, { useContext, useEffect, useState } from "react"
import { object, number, string } from "yup"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { Formik } from "formik"
import isUndefined from "lodash/isUndefined"
import isNull from "lodash/isNull"
import get from "lodash/get"
import range from "lodash/range"

import { Store } from "store"
import { fetchUserRSVPInformation, putUserRSVPInformation } from "actions"

import styles from "../Forms.module.scss"

const schema = object({
    weddingGuests: number().required(),
    rehearsalGuests: number().required(),
    songs: string(),
    needBus: string(),
    origin: string(),
})

const YES = "Yes"
const NO = "No"

const LAMPOLLA = "L'Ampolla"
const TORTOSA = "Tortosa"
const OTHER = "Other"

function RSVPForm() {
    const { state, dispatch } = useContext(Store)

    const [showConfirmation, setShowConfirmation] = useState(false)

    const {
        app: {
            user: { email },
            rsvp: { allowed, confirmed },
        },
    } = state

    useEffect(() => {
        if (email) {
            fetchUserRSVPInformation(email, dispatch)
        }
    }, [email, dispatch])

    const submitForm = (values, actions) => {
        const { setSubmitting, setStatus } = actions
        putUserRSVPInformation(
            { email, ...values },
            setSubmitting,
            setStatus,
            setShowConfirmation,
            dispatch
        )
    }

    if (isNull(allowed)) {
        return (
            <Container>
                <Col className={styles.intro}>
                    <Alert variant="info">
                        Whoops, it looks like we don't have your email address.
                        Email us at{" "}
                        <strong>
                            <a href="mailto:hola@lledoisalim.com">
                                hola@lledoisalim.com
                            </a>
                        </strong>{" "}
                        so we can update our records.
                    </Alert>
                </Col>
            </Container>
        )
    }

    // wedding values
    const weddingMaxGuests = get(allowed, ["Wedding", "MaxGuests"])
    const weddingConfirmedGuests = get(confirmed, [
        "Wedding",
        "ConfirmedGuests",
    ])
    const weddingSongs = get(confirmed, ["Wedding", "Songs"])
    const weddingNeedBus = get(confirmed, ["Wedding", "NeedBus"])
    const weddingOrigin = get(confirmed, ["Wedding", "Origin"])

    // rehearsal values
    const rehearsalMaxGuests = get(allowed, ["Rehearsal", "MaxGuests"])
    const rehearsalConfirmedGuests = get(confirmed, [
        "Rehearsal",
        "ConfirmedGuests",
    ])

    const buttonText = isUndefined(weddingConfirmedGuests)
        ? "Submit RSVP"
        : "Update RSVP"

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                weddingGuests: weddingConfirmedGuests || 0,
                rehearsalGuests: rehearsalConfirmedGuests || 0,
                needBus: weddingNeedBus || NO,
                origin: weddingOrigin || TORTOSA,
                songs: weddingSongs || "",
            }}
            onSubmit={submitForm}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isSubmitting,
                errors,
                status,
            }) => (
                <Form
                    noValidate
                    onSubmit={handleSubmit}
                    className={styles.form}
                >
                    <div className="text-center">
                        <h5 className="text-muted">Wedding</h5>
                    </div>
                    <Form.Group controlId="controlIdWeddingGuests">
                        <Form.Label>Number of guests attending</Form.Label>
                        <Form.Control
                            name="weddingGuests"
                            as="select"
                            value={values.weddingGuests}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                                touched.weddingGuests && errors.weddingGuests
                            }
                        >
                            {range(0, weddingMaxGuests + 1).map(idx => (
                                <option
                                    label={idx === 0 ? `0 - Can't Attend` : idx}
                                    value={idx}
                                    key={idx}
                                >
                                    idx === 0 ? `0 - Can't Attend` : idx
                                </option>
                            ))}
                        </Form.Control>
                        <Form.Text className="text-muted">
                            The number of guests (including yourself) that will
                            be in attendance.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="controlIdNeedBus">
                        <Form.Label>
                            Would you like bus transportation to/from the venue?
                        </Form.Label>
                        <Form.Control
                            name="needBus"
                            as="select"
                            value={values.needBus}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.needBus && errors.needBus}
                        >
                            <option label={YES} value={YES}>
                                {YES}
                            </option>
                            <option label={NO} value={NO}>
                                {NO}
                            </option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            We'll be providing bus transportation to/from the
                            venue. Let us know if you'd like to reserve a spot
                            for your group!
                        </Form.Text>
                    </Form.Group>
                    {values.needBus === YES && (
                        <Form.Group controlId="controlIdOrigin">
                            <Form.Label>Where is your origin?</Form.Label>
                            <Form.Control
                                name="origin"
                                as="select"
                                value={values.origin}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.origin && errors.origin}
                            >
                                <option label={TORTOSA} value={TORTOSA}>
                                    {TORTOSA}
                                </option>
                                <option label={LAMPOLLA} value={LAMPOLLA}>
                                    {LAMPOLLA}
                                </option>
                                <option
                                    label={`${OTHER} - Contact us if you want help arranging transportation`}
                                    value={OTHER}
                                >{`${OTHER} - Contact us if you want help arranging transportation`}</option>
                            </Form.Control>
                            <Form.Text className="text-muted">
                                We're only planning on having bus transportation
                                from L'Ampolla and Tortosa. Reach out if you
                                need help arranging transportation from other
                                locations.
                            </Form.Text>
                        </Form.Group>
                    )}
                    <Form.Group controlId="controlIdWeddingSongs">
                        <Form.Label>Song requests</Form.Label>
                        <Form.Control
                            name="songs"
                            as="textarea"
                            rows="3"
                            value={values.songs}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.songs && errors.songs}
                        />
                        <Form.Text className="text-muted">
                            Let us know which songs will keep you partying all
                            night!
                        </Form.Text>
                    </Form.Group>
                    <div className="text-center mt-5">
                        <h5 className="text-muted">
                            Welcome &ldquo;Pica-pica&ldquo;
                        </h5>
                    </div>
                    <Form.Group controlId="controlIdRehearsalGuests">
                        <Form.Label>Number of guests attending</Form.Label>
                        <Form.Control
                            name="rehearsalGuests"
                            as="select"
                            value={values.rehearsalGuests}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                                touched.rehearsalGuests &&
                                errors.rehearsalGuests
                            }
                        >
                            {range(0, rehearsalMaxGuests + 1).map(idx => (
                                <option
                                    label={idx === 0 ? `0 - Can't Attend` : idx}
                                    value={idx}
                                />
                            ))}
                        </Form.Control>
                        <Form.Text className="text-muted">
                            The number of guests (including yourself) that will
                            be in attendance.
                        </Form.Text>
                    </Form.Group>
                    <Button
                        className="mt-5"
                        variant="primary"
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        block
                    >
                        {buttonText}
                    </Button>
                    {status && (
                        <Alert variant="danger" className="mt-4">
                            {status}
                        </Alert>
                    )}
                    <Alert
                        variant="success"
                        className="mt-4"
                        onClose={() => setShowConfirmation(false)}
                        show={showConfirmation}
                    >
                        Thanks for your RSVP!
                    </Alert>
                </Form>
            )}
        </Formik>
    )
}

export default RSVPForm
