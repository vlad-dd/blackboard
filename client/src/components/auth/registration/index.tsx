import React from 'react'
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';
import { isNil } from "lodash-es";
import Form from '../form';
import { GLOBAL_APPLICATION_ROUTES } from '../../../global/routes';
import { useRegistrationWidget } from './use-registration-widget';
import { NavigationalBlock } from '../components';
import { INVALID_CREDENTIALS_ERROR_MESSAGE, REGISTRATION_BUTTON_MESSAGE, REGISTRATION_FORM_TITLE } from '../constants';

const Registration = () => {
    const {
        email,
        password,
        fullName,
        avatarUrl,
        errors,
        setEmail,
        setPassword,
        setFullName,
        setAvatarUrl,
        submitForm,
        errorObserver
    } = useRegistrationWidget();

    return (
        <Form title={REGISTRATION_FORM_TITLE}>
            {!isNil(errors) && <Alert variant="filled" severity="error">{INVALID_CREDENTIALS_ERROR_MESSAGE}</Alert>}
            <TextField
                fullWidth
                error={errorObserver("email")}
                label="Email"
                variant="outlined"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
                {...(errorObserver("email") && { helperText: <span>{errorObserver("email")}</span> })}
            />
            <TextField
                fullWidth
                label="Password"
                error={errorObserver("password")}
                variant="outlined"
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                {...(errorObserver("password") && { helperText: <span>{errorObserver("password")}</span> })}
            />
            <TextField
                fullWidth
                label="Nickname"
                variant="outlined"
                error={errorObserver("fullName")}
                value={fullName}
                onChange={({ target: { value } }) => setFullName(value)}
                {...(errorObserver("fullName") && { helperText: <span>{errorObserver("fullName")}</span> })}
            />
            <TextField
                fullWidth
                label="Image URL"
                variant="outlined"
                value={avatarUrl}
                error={errorObserver("avatarUrl")}
                onChange={({ target: { value } }) => setAvatarUrl(value)}
                {...(errorObserver("avatarUrl") && { helperText: <span>{errorObserver("avatarUrl")}</span> })}
            />
            <Button
                variant="contained"
                onClick={(e) => submitForm(e)}
            >
                {REGISTRATION_BUTTON_MESSAGE}
            </Button>
            <NavigationalBlock
                supportText="Already have an account?"
                route={GLOBAL_APPLICATION_ROUTES.LOGIN}
                action="Sign In"
            />
        </Form>
    )
}

export default Registration;