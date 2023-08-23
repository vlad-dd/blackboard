import { BLACKBOARD_SOCIAL_MEDIAS, SOCIAL_MEDIAS_DESCRIPTION, SOCIAL_MEDIAS_TITLE } from '../../constants';
import { Media } from './components';
import {
    StyledFooterSocialMediaContainer,
    StyledFooterSocialMediaWrapper,
    StyledSocialMediaDescription,
    StyledSocialMediaTitle
} from '../../styled';

const SocialMedias = () => {
    return (
        <StyledFooterSocialMediaWrapper>
            <StyledSocialMediaTitle>{SOCIAL_MEDIAS_TITLE}</StyledSocialMediaTitle>
            <StyledSocialMediaDescription>
                {SOCIAL_MEDIAS_DESCRIPTION}
            </StyledSocialMediaDescription>
            <StyledFooterSocialMediaContainer>
                {BLACKBOARD_SOCIAL_MEDIAS.map(({ id, href, media }: any) => <Media id={id} href={href} media={media} />)}
            </StyledFooterSocialMediaContainer>
        </StyledFooterSocialMediaWrapper>
    )
}

export default SocialMedias;