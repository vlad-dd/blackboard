import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { SUBSCRIPTION_DESCRIPTION, SUBSCRIPTION_TITLE } from '../../constants';
import {
    StyledFooterSubscription,
    StyledSubscriptionDescription,
    StyledSubscriptionTitle
} from '../../styled';

const Subscription = () => {
    return (
        <StyledFooterSubscription>
            <StyledSubscriptionTitle>
                {SUBSCRIPTION_TITLE}
            </StyledSubscriptionTitle>
            <StyledSubscriptionDescription>
                {SUBSCRIPTION_DESCRIPTION}
            </StyledSubscriptionDescription>
            <TextField
                type="email"
                label="Email"
                variant="outlined"
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton edge="end" color="primary">
                            <AddIcon />
                        </IconButton>
                    </InputAdornment>
                }}
            />
        </StyledFooterSubscription>
    )
}

export default Subscription;