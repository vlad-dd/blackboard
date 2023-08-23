import React from 'react'
import { StyledActionTitle, StyledFormWrapper } from '../styled';

const Form = ({ title, children }: any) => {
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