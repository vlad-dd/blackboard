import React from 'react'
import { Alert, Button, TextField } from '@mui/material'
import Form from '../form'
import { useLoginWidget } from './use-login-widget';

const Login = () => {
    const { email, password, errors, setEmail, setPassword, submitForm, errorObserver } = useLoginWidget();

    return (
        <Form title="Log in">
            {!!errors && (
                <Alert variant="filled" severity="error">
                    {(errorObserver("InvalidCredentials")?.message) ?? "Make sure you filled in all the information!"}
                </Alert>
            )}
            <TextField
                fullWidth
                error={!!errorObserver("email")}
                label="Email"
                variant="outlined"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
                {...(!!errorObserver("email") && { helperText: <span>{errorObserver("email")}</span> })}
            />
            <TextField
                fullWidth
                error={!!errorObserver("password")}
                label="Password"
                variant="outlined"
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                {...(!!errorObserver("password") && { helperText: <span>{errorObserver("password")}</span> })}
            />
            <Button
                variant="contained"
                onClick={(e) => submitForm(e)}
            >
                Start Planning
            </Button>

        </Form>
    )
}

export default Login