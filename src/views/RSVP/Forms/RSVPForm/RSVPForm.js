import React, { useContext, useEffect } from "react"
import { object, string, number } from "yup"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import { Formik } from "formik"

import { Store } from "store"
import { fetchUserRSVPInformation } from "actions"

import styles from "../Forms.module.scss"

const YES = "yes"
const NO = "no"

const schema = object({
    weddingAttending: string().required(),
    weddingGuests: number().required(),
    rehearsalAttending: string().required(),
    rehearsalGuests: number().required(),
})

function RSVPForm() {
    const { state, dispatch } = useContext(Store)

    const {
        app: {
            user: { email },
        },
    } = state

    useEffect(() => {
        if (email) {
            fetchUserRSVPInformation(email, dispatch)
        }
    }, [email, dispatch])

    const submitForm = (values, actions) => {
        const { setSubmitting, setStatus } = actions
    }

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                weddingAttending: "",
                weddingGuests: 0,
                rehearsalAttending: "",
                rehearsalGuests: 0,
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
                    <pre>{JSON.stringify({ values }, null, 2)}</pre>
                    <Form
                        noValidate
                        onSubmit={handleSubmit}
                        className={styles.form}
                    >
                        <div className="text-center">
                            <h5 className="text-muted">RSVP for the Wedding</h5>
                        </div>
                        <Form.Group controlId="controlIdWeddingAttending">
                            <Form.Check
                                name="weddingAttending"
                                label="Yes, we'll see you there!"
                                value={YES}
                                type="radio"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={
                                    touched.weddingAttending &&
                                    errors.weddingAttending
                                }
                            />
                            <Form.Check
                                name="weddingAttending"
                                label="No, we can't make it."
                                value={NO}
                                type="radio"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={
                                    touched.weddingAttending &&
                                    errors.weddingAttending
                                }
                            />
                            <Form.Text className="text-muted">
                                Will you or members of your party be in
                                attendance?
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="controlIdWeddingGuests">
                            <Form.Label>Number of guests.</Form.Label>
                            <Form.Control
                                name="weddingGuests"
                                type="number"
                                max={4}
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
                                will be in attendance.
                            </Form.Text>
                        </Form.Group>
                        <div className="text-center mt-5">
                            <h5 className="text-muted">Rehearsal Dinner</h5>
                        </div>
                        <Form.Group controlId="controlIdRehearsalAttending">
                            <Form.Check
                                name="rehearsalAttending"
                                label="Yes, we'll see you there!"
                                value={YES}
                                type="radio"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={
                                    touched.rehearsalAttending &&
                                    errors.rehearsalAttending
                                }
                            />
                            <Form.Check
                                name="rehearsalAttending"
                                label="No, we can't make it."
                                value={NO}
                                type="radio"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={
                                    touched.rehearsalAttending &&
                                    errors.rehearsalAttending
                                }
                            />
                            <Form.Text className="text-muted">
                                Will you or members of your party be in
                                attendance?
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="controlIdRehearsalGuests">
                            <Form.Label>Number of guests attending.</Form.Label>
                            <Form.Control
                                name="rehearsalGuests"
                                type="number"
                                max={4}
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
                                The number of guests (including yourself)
                                attending the rehearsal dinner. Max of x.
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
