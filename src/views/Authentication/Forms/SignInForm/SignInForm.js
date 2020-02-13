import React, { useContext } from "react"
import { useCookies } from "react-cookie"
import { object, string } from "yup"
import { Formik } from "formik"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

import { selectLanguage } from "utilities/cookies"
import { Store } from "store"
import { signIn } from "actions"
import { signInForm } from "content/Authentication"

import styles from "../Forms.module.scss"

const schema = object({
    email: string()
        .email()
        .required(),
    password: string().required(),
})

function SignInForm({ history }) {
    const { state, dispatch } = useContext(Store)
    const [cookies] = useCookies(["language"])

    const {
        app: {
            user: { email },
        },
    } = state

    const {
        Header,
        SubmitButton,
        SubmitButtonLoading,
        NoAccountPrompt,
        emailPlaceholder,
        passwordPlaceholder,
    } = signInForm[selectLanguage(cookies)]

    const submitForm = (values, actions) => {
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
                    <div className="text-center">
                        <h4 className="text-muted">
                            <Header />
                        </h4>
                    </div>
                    <Form.Group controlId="controlIdEmail">
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder={emailPlaceholder}
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
                            placeholder={passwordPlaceholder}
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
                        {isSubmitting ? (
                            <SubmitButtonLoading />
                        ) : (
                            <SubmitButton />
                        )}
                    </Button>
                    {status && (
                        <Alert variant="danger" className="mt-4">
                            {status}
                        </Alert>
                    )}
                    <div className={styles.links}>
                        <p>
                            <NoAccountPrompt />
                        </p>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default SignInForm
