import React, { useContext, useEffect } from "react"
import { object, number } from "yup"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import { Formik } from "formik"
import isUndefined from "lodash/isUndefined"
import isNull from "lodash/isNull"
import get from "lodash/get"

import { Store } from "store"
import { fetchUserRSVPInformation, putUserRSVPInformation } from "actions"

import styles from "../Forms.module.scss"

const schema = object({
    weddingGuests: number().required(),
    rehearsalGuests: number().required(),
})

function RSVPForm() {
    const { state, dispatch } = useContext(Store)

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
            dispatch
        )
    }

    if (isNull(allowed)) {
        return (
            <div>
                Whoops, it looks like we don't have your email address. Email us
                at hola@lledoisalim so we can update our records.
            </div>
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

    const buttonText = isUndefined(weddingConfirmedGuests) ? "Submit RSVP" : "Update RSVP"

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
                            type="number"
                            max={weddingMaxGuests}
                            min={0}
                            value={values.weddingGuests}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                                touched.weddingGuests && errors.weddingGuests
                            }
                        />
                        <Form.Text className="text-muted">
                            The number of guests (including yourself) that will
                            be in attendance, with a max of {weddingMaxGuests}.
                            Entering 0 means you can't make it.
                        </Form.Text>
                    </Form.Group>
                    <div className="text-center mt-5">
                        <h5 className="text-muted">Rehearsal Dinner</h5>
                    </div>
                    <Form.Group controlId="controlIdRehearsalGuests">
                        <Form.Label>Number of guests attending</Form.Label>
                        <Form.Control
                            name="rehearsalGuests"
                            type="number"
                            max={rehearsalMaxGuests}
                            min={0}
                            value={values.rehearsalGuests}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                                touched.rehearsalGuests &&
                                errors.rehearsalGuests
                            }
                        />
                        <Form.Text className="text-muted">
                            The number of guests (including yourself) that will
                            be in attendance, with a max of {rehearsalMaxGuests}
                            . Entering 0 means you can't make it.
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
                </Form>
            )}
        </Formik>
    )
}

export default RSVPForm