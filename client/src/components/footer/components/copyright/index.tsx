import React from 'react';
import { COPYRIGHT_MESSAGE } from '../../constants';
import { StyledCopyrightWrapper } from '../../styled';

const Copyright = () => {
    return (
        <StyledCopyrightWrapper>
            {COPYRIGHT_MESSAGE}
        </StyledCopyrightWrapper>
    )
}

export default Copyright;