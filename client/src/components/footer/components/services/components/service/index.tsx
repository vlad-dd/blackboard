import { StyledBlackBoardServicesListItem, StyledBlackBoardServicesListLink } from '../../../../styled'

const Service = ({ service }: { service: string }) => {
    return (
        <StyledBlackBoardServicesListItem>
            <StyledBlackBoardServicesListLink>
                {service}
            </StyledBlackBoardServicesListLink>
        </StyledBlackBoardServicesListItem>
    )
}

export default Service