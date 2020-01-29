import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import styles from "./SignInForm.module.scss"

function SignInForm() {
    return (
        <Form className={styles.form}>
            <h4 className="text-muted">Sign In to RSVP</h4>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Control type="password" placeholder="Password" />
            <Button variant="primary" type="submit" size="lg" block>
                Sign in
            </Button>
        </Form>
    )
}

export default SignInForm
