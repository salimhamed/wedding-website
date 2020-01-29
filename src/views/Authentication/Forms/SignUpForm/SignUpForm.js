import React from "react"
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import styles from "./SignUpForm.module.scss"

function SignUpForm() {
    return (
        <Form className={styles.form}>
            <div className="text-center">
                <h4 className="text-muted">Please Sign Up</h4>
            </div>
            <Form.Group controlId="name">
                <Form.Control placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted">
                    Register with the same email address that received the email invitation.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" size="lg" block>
                Sign Up
            </Button>
            <p>
                Already have an account?{" "}
                <Link to="/auth">Sign in here.</Link>
            </p>
        </Form>
    )
}

export default SignUpForm
