import React, { useContext, useEffect, useState } from "react"
import { useCookies } from "react-cookie"
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

import { selectLanguage } from "utilities/cookies"
import { Store } from "store"
import { fetchUserRSVPInformation, putUserRSVPInformation } from "actions"
import { rsvpForm } from "content/RSVP"

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
    const [cookies] = useCookies(["language"])

    const [showConfirmation, setShowConfirmation] = useState(false)

    const {
        app: {
            user: { email },
            rsvp: { allowed, confirmed },
        },
    } = state

    const {
        AlertNoEmail,
        submitButtonText,
        updateButtonText,
        yesLabel,
        noLabel,
        lampollaLabel,
        tortosaLabel,
        otherLabel,
        otherLabelExtra,
        WeddingFormHeader,
        NumberOfGuestsLabel,
        zeroLabel,
        NumberOfGuestsHelp,
        TransportationLabel,
        TransportationHelp,
        OriginLabel,
        OriginHelp,
        SongsLabel,
        SongsHelp,
        DinnerFormHeader,
        DinnerGuestsLabel,
        DinnerGuestsHelp,
        AlertRSVPUpdated,
    } = rsvpForm[selectLanguage(cookies)]

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
                        <AlertNoEmail />
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
        ? submitButtonText
        : updateButtonText

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
                        <h5 className="text-muted">
                            <WeddingFormHeader />
                        </h5>
                    </div>
                    <Form.Group controlId="controlIdWeddingGuests">
                        <Form.Label>
                            <NumberOfGuestsLabel />
                        </Form.Label>
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
                                    label={idx === 0 ? zeroLabel : idx}
                                    value={idx}
                                    key={idx}
                                >
                                    {idx === 0 ? zeroLabel : idx}
                                </option>
                            ))}
                        </Form.Control>
                        <Form.Text className="text-muted">
                            <NumberOfGuestsHelp />
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="controlIdNeedBus">
                        <Form.Label>
                            <TransportationLabel />
                        </Form.Label>
                        <Form.Control
                            name="needBus"
                            as="select"
                            value={values.needBus}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.needBus && errors.needBus}
                        >
                            <option label={yesLabel} value={YES}>
                                {yesLabel}
                            </option>
                            <option label={noLabel} value={NO}>
                                {noLabel}
                            </option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            <TransportationHelp />
                        </Form.Text>
                    </Form.Group>
                    {values.needBus === YES && (
                        <Form.Group controlId="controlIdOrigin">
                            <Form.Label>
                                <OriginLabel />
                            </Form.Label>
                            <Form.Control
                                name="origin"
                                as="select"
                                value={values.origin}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.origin && errors.origin}
                            >
                                <option label={tortosaLabel} value={TORTOSA}>
                                    {tortosaLabel}
                                </option>
                                <option label={lampollaLabel} value={LAMPOLLA}>
                                    {lampollaLabel}
                                </option>
                                <option
                                    label={`${otherLabel} - ${otherLabelExtra}`}
                                    value={OTHER}
                                >{`${otherLabel} - ${otherLabelExtra}`}</option>
                            </Form.Control>
                            <Form.Text className="text-muted">
                                <OriginHelp />
                            </Form.Text>
                        </Form.Group>
                    )}
                    <Form.Group controlId="controlIdWeddingSongs">
                        <Form.Label>
                            <SongsLabel />
                        </Form.Label>
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
                            <SongsHelp />
                        </Form.Text>
                    </Form.Group>
                    <div className="text-center mt-5">
                        <h5 className="text-muted">
                            <DinnerFormHeader />
                        </h5>
                    </div>
                    <Form.Group controlId="controlIdRehearsalGuests">
                        <Form.Label>
                            <DinnerGuestsLabel />
                        </Form.Label>
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
                                    label={idx === 0 ? `0 - ${zeroLabel}` : idx}
                                    value={idx}
                                >
                                    {idx === 0 ? `0 - ${zeroLabel}` : idx}
                                </option>
                            ))}
                        </Form.Control>
                        <Form.Text className="text-muted">
                            <DinnerGuestsHelp />
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
                        <AlertRSVPUpdated />
                    </Alert>
                </Form>
            )}
        </Formik>
    )
}

export default RSVPForm
