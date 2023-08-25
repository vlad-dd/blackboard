import React from 'react'
import { IAuthForm } from '../interfaces';
import { StyledActionTitle, StyledFormWrapper } from '../styled';

const Form = ({ title, children }: IAuthForm) => {
    return (
        <StyledFormWrapper>
            <StyledActionTitle>
                {title}
            </StyledActionTitle>
            {children}
        </StyledFormWrapper>
    )
}

export default Form;