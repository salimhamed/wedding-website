import React, { useContext, useEffect } from "react"
import { object, string, number } from "yup"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import { Formik } from "formik"
import isNull from "lodash/isNull"
import get from "lodash/get"

import { Store } from "store"
import { fetchUserRSVPInformation } from "actions"

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
            rsvp,
        },
    } = state

    useEffect(() => {
        if (email) {
            fetchUserRSVPInformation(email, dispatch)
        }
    }, [email, dispatch])

    const submitForm = (values, actions) => {
        const { setSubmitting, setStatus } = actions
        console.log({ values })
    }

    if (isNull(rsvp)) {
        return (
            <div>
                Whoops, it looks like we don't have your email address. Email us
                at hola@lledoisalim so we can update our records.
            </div>
        )
    }

    const weddingAllowedGuests = get(rsvp, ["Wedding", "AllowedGuests"])
    const weddingConfirmedGuests = get(rsvp, ["Wedding", "ConfirmedGuests"], 0)

    const rehearsalAllowedGuests = get(rsvp, ["Rehearsal", "AllowedGuests"])
    const rehearsalConfirmedGuests = get(
        rsvp,
        ["Rehearsal", "ConfirmedGuests"],
        0
    )

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                weddingGuests: weddingConfirmedGuests,
                rehearsalGuests: rehearsalConfirmedGuests,
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
                <>
                    <pre>{JSON.stringify({ values, errors }, null, 2)}</pre>
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
                                max={weddingAllowedGuests}
                                min={0}
                                value={values.weddingGuests}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={
                                    touched.weddingGuests &&
                                    errors.weddingGuests
                                }
                            />
                            <Form.Text className="text-muted">
                                The number of guests (including yourself) that
                                will be in attendance, with a max of{" "}
                                {weddingAllowedGuests}. Entering 0 means you
                                can't make it.
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
                                max={rehearsalAllowedGuests}
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
                                The number of guests (including yourself) that
                                will be in attendance, with a max of{" "}
                                {rehearsalAllowedGuests}. Entering 0 means you
                                can't make it.
                            </Form.Text>
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            block
                        >
                            {isSubmitting
                                ? "Confirming RSVP..."
                                : "Confirm RSVP"}
                        </Button>
                        {status && (
                            <Alert variant="danger" className="mt-4">
                                {status}
                            </Alert>
                        )}
                    </Form>
                </>
            )}
        </Formik>
    )
}

export default RSVPForm
