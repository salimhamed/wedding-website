import React, { useContext, useState } from "react"
import { object, string } from "yup"
import { Formik } from "formik"
import Form from "react-bootstrap/Form"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

import { Store } from "store"
import { signIn } from "actions"

import styles from "../Forms.module.scss"

const schema = object({
    email: string()
        .email()
        .required(),
    password: string().required(),
})

function SignInForm({ history }) {
    const { state, dispatch } = useContext(Store)

    const {
        app: {
            user: { email, isConfirmationEmailSent },
        },
    } = state

    const [
        showConfirmationEmailAlert,
        setShowConfirmationEmailAlert,
    ] = useState(isConfirmationEmailSent)

    const submitForm = (values, actions) => {
        console.log("submitting")
        const { setSubmitting, setStatus } = actions
        signIn(values, setSubmitting, setStatus, history, dispatch)
    }

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                email: email || "",
                password: "",
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
                    {isConfirmationEmailSent && (
                        <Alert
                            variant="success"
                            className="mb-4"
                            onClose={() => setShowConfirmationEmailAlert(false)}
                            show={showConfirmationEmailAlert}
                            dismissible
                        >
                            Check your email for a link to confirm your account.
                            You must confirm your account before logging in.
                        </Alert>
                    )}
                    <div className="text-center">
                        <h4 className="text-muted">Please Sign In</h4>
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
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="controlIdPassword">
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.password && errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        block
                    >
                        {isSubmitting ? "Signing In..." : "Sign In"}
                    </Button>
                    {status && (
                        <Alert variant="danger" className="mt-4">
                            {status}
                        </Alert>
                    )}
                    <div className={styles.links}>
                        <p>
                            Don't have an account?{" "}
                            <Link to="/auth/signup">Sign up here.</Link>
                        </p>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default SignInForm
