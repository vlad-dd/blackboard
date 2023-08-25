import React from 'react'
import { Alert, Button, TextField } from '@mui/material'
import { isNil } from "lodash-es";
import Form from '../form'
import { useLoginWidget } from './use-login-widget';
import {
    INVALID_CREDENTIALS_ERROR,
    INVALID_CREDENTIALS_ERROR_MESSAGE,
    LOGIN_BUTTON_MESSAGE,
    LOGIN_FORM_TITLE
} from '../constants';

const Login = () => {
    const { email, password, errors, setEmail, setPassword, submitForm, errorObserver } = useLoginWidget();

    return (
        <Form title={LOGIN_FORM_TITLE}>
            {!isNil(errors) && (
                <Alert variant="filled" severity="error">
                    {(errorObserver(INVALID_CREDENTIALS_ERROR)?.message) ?? INVALID_CREDENTIALS_ERROR_MESSAGE}
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
                {LOGIN_BUTTON_MESSAGE}
            </Button>

        </Form>
    )
}

export default Login