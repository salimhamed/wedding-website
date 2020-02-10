import React, { useContext } from "react"
import { useCookies } from "react-cookie"
import { object, string } from "yup"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import { Formik } from "formik"

import { selectLanguage } from "utilities/cookies"
import { signUp } from "actions"
import { Store } from "store"
import { signUpForm } from "content/Authentication"

import styles from "../Forms.module.scss"

const schema = object({
    name: string().required(),
    email: string()
        .email()
        .required(),
    password: string()
        .min(6)
        .required(),
})

function SignUpForm({ history }) {
    const { dispatch } = useContext(Store)
    const [cookies] = useCookies(["language"])

    const submitForm = (values, actions) => {
        const { setSubmitting, setStatus } = actions
        signUp(values, setSubmitting, setStatus, history, dispatch)
    }

    const {
        Header,
        namePlaceholder,
        emailPlaceholder,
        EmailHelp,
        passwordPlaceholder,
        SubmitButton,
        SubmitButtonLoading,
        HaveAccountPrompt,
    } = signUpForm[selectLanguage(cookies)]

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
                        <h4 className="text-muted">
                            <Header />
                        </h4>
                    </div>
                    <Form.Group controlId="controlIdName">
                        <Form.Control
                            name="name"
                            placeholder={namePlaceholder}
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
                            placeholder={emailPlaceholder}
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.email && errors.email}
                        />
                        <Form.Text className="text-muted">
                            <EmailHelp />
                        </Form.Text>
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
                            <HaveAccountPrompt />
                        </p>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default SignUpForm
