import React, { useContext } from "react"
import { number, object, string } from "yup"
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import { Formik } from "formik"

import { confirmCode } from "actions"
import { Store } from "store"

import styles from "../Forms.module.scss"

const schema = object({
    email: string()
        .email()
        .required(),
    code: number()
        .min(6)
        .required(),
})

function ConfirmationForm() {
    const { state, dispatch } = useContext(Store)

    const {
        app: {
            user: { email },
        },
    } = state

    const submitForm = (values, actions) => {
        const { setSubmitting, setStatus } = actions
        confirmCode(values, setSubmitting, setStatus, dispatch)
    }

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                email: email || "",
                code: "",
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
                        <h4 className="text-muted">Enter Confirmation Code</h4>
                        <p>Check your email for a 6 digit code.</p>
                    </div>
                    <Form.Group controlId="controlIdEmail">
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.email && errors.email}
                        />
                        <Form.Text className="text-muted">
                            Enter the email address that received the
                            confirmation email.
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="controlIdCode">
                        <Form.Control
                            name="code"
                            placeholder="Code"
                            value={values.code}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.code && errors.code}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.code}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        block
                    >
                        {isSubmitting ? "Confirming..." : "Confirm"}
                    </Button>
                    {status && (
                        <Alert variant="danger" className="mt-4">
                            {status}
                        </Alert>
                    )}
                    <div className={styles.links}>
                        <p>
                            Already have an account?{" "}
                            <Link to="/auth">Sign in here.</Link>
                        </p>
                        <p>
                            Trying to create an account?{" "}
                            <Link to="/auth/signup">Sign up here.</Link>
                        </p>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ConfirmationForm
