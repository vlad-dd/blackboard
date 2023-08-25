import React from 'react'
import { IServices } from '../../../../interfaces'
import { StyledBlackBoardServicesListItem, StyledBlackBoardServicesListLink } from '../../../../styled'

const Service = ({ service }: IServices) => {
    return (
        <StyledBlackBoardServicesListItem>
            <StyledBlackBoardServicesListLink>
                {service}
            </StyledBlackBoardServicesListLink>
        </StyledBlackBoardServicesListItem>
    )
}

export default Service