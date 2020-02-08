import React, { useContext } from "react"
import { object, string } from "yup"
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import { Formik } from "formik"

import { signUp } from "actions"
import { Store } from "store"

import styles from "./SignUpForm.module.scss"

const schema = object({
    name: string().required(),
    email: string()
        .email()
        .required(),
    password: string()
        .min(6)
        .required(),
})

function SignUpForm() {
    const { dispatch } = useContext(Store)

    const submitForm = (values, actions) => {
        const { setSubmitting, setStatus } = actions
        signUp(values, setSubmitting, setStatus, dispatch)
    }

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                name: "",
                email: "",
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
                    <div className="text-center">
                        <h4 className="text-muted">Please Sign Up</h4>
                    </div>
                    <Form.Group controlId="controlIdName">
                        <Form.Control
                            name="name"
                            placeholder="Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.name && errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>
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
                            Register with the same email address that received
                            the email invitation.
                        </Form.Text>
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
                        {isSubmitting ? "Signing Up..." : "Sign Up"}
                    </Button>
                    {status && (
                        <Alert variant="danger" className="mt-4">
                            {status}
                        </Alert>
                    )}
                    <p>
                        Already have an account?{" "}
                        <Link to="/auth">Sign in here.</Link>
                    </p>
                </Form>
            )}
        </Formik>
    )
}

export default SignUpForm
