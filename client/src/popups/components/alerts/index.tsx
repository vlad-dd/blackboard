import React from 'react'
import { useSelector } from 'react-redux';
import { Alert, Snackbar } from '@mui/material';
import { applicationAlertStateSelector } from '../../../store/selectors';

const AlertsPopup = () => {
    const { isOpen, message, role } = useSelector(applicationAlertStateSelector);
    return (
        <Snackbar open={isOpen} autoHideDuration={6000}>
            <Alert severity={role} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
};

export default AlertsPopup;