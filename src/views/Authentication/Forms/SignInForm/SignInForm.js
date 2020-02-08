import React from "react"
import Form from "react-bootstrap/Form"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import classNames from "classnames"

import styles from "./SignInForm.module.scss"
import formStyles from "../Forms.module.scss"

function SignInForm() {
    return (
        <Form className={classNames(styles.form, formStyles.form)}>
            <div className="text-center">
                <h4 className="text-muted">Please Sign In</h4>
            </div>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Control type="password" placeholder="Password" />
            <Button variant="primary" type="submit" size="lg" block>
                Sign In
            </Button>
            <div className={formStyles.links}>
                <p>
                    Don't have an account?{" "}
                    <Link to="/auth/signup">Sign up here.</Link>
                </p>
            </div>
        </Form>
    )
}

export default SignInForm
