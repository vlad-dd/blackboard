import { useSponsorsWidget } from './use-sponsors-widget';
import { SPONSORS_TITLE } from '../../constants';
import { SponsorsTitle, StyledSponsorsContainer, StyledSponsorsWrapper } from '../../styled'

const Sponsors = () => {
    const { sponsors } = useSponsorsWidget();
    return (
        <StyledSponsorsWrapper>
            <SponsorsTitle>{SPONSORS_TITLE}</SponsorsTitle>
            <StyledSponsorsContainer>
                {sponsors}
            </StyledSponsorsContainer>
        </StyledSponsorsWrapper>
    )
}

export default Sponsors