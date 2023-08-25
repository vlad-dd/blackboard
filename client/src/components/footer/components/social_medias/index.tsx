import React from 'react';
import { Media } from './components';
import { ISocialMedias } from '../../interfaces';
import {
    BLACKBOARD_SOCIAL_MEDIAS,
    SOCIAL_MEDIAS_DESCRIPTION,
    SOCIAL_MEDIAS_TITLE
} from '../../constants';
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
                {BLACKBOARD_SOCIAL_MEDIAS.map((props: ISocialMedias) => <Media {...props} />)}
            </StyledFooterSocialMediaContainer>
        </StyledFooterSocialMediaWrapper>
    )
}

export default SocialMedias;