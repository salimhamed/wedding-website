import React, { useContext, useEffect, useState } from "react"
import { object, number } from "yup"
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
})

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
                            <a href="mailto:hola@lledoisalim">
                                hola@lledoisalim
                            </a>
                        </strong>{" "}
                        so we can update our records.
                    </Alert>
                </Col>
            </Container>
        )
    }

    const weddingMaxGuests = get(allowed, ["Wedding", "MaxGuests"])
    const weddingConfirmedGuests = get(confirmed, [
        "Wedding",
        "ConfirmedGuests",
    ])

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
                        <h5 className="text-muted">RSVP for the Wedding</h5>
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
                                />
                            ))}
                        </Form.Control>
                        <Form.Text className="text-muted">
                            The number of guests (including yourself) that will
                            be in attendance.
                        </Form.Text>
                    </Form.Group>
                    <div className="text-center mt-5">
                        <h5 className="text-muted">Rehearsal Dinner</h5>
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
