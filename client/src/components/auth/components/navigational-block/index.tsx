import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNavigationalBlockWrapper } from '../../styled'

const NavigationalBlock = ({ supportText, route, action }: any) => {
    return (
        <StyledNavigationalBlockWrapper>
            <span>{supportText}</span>
            <Link
                style={{ color: "#0000FF", marginLeft: "5px", textDecoration: "none" }}
                to={route}>
                {action}
            </Link>
        </StyledNavigationalBlockWrapper>
    )
}

export default NavigationalBlock