import React from 'react'
import { StyledFooterSocialMedia } from '../../../../styled'

const Media = ({ id, href, media }) => {
    return (
        <StyledFooterSocialMedia key={id} href={href}>
            {media}
        </StyledFooterSocialMedia>
    )
}

export default Media;