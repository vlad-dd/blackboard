import { BlackBoardServices, Copyright, SocialMedias, Subscription } from './components';
import { StyledFooterContentContainer, StyledFooterWrapper } from './styled'

const Footer = () => {
    return (
        <StyledFooterWrapper>
            <StyledFooterContentContainer>
                <SocialMedias />
                <BlackBoardServices /> 
                <Subscription />               
            </StyledFooterContentContainer>
            <Copyright />
        </StyledFooterWrapper>
    )
}

export default Footer