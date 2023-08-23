import { StyledFooterSocialMedia } from '../../../../styled'

const Media = ({ id, href, media }: any) => {
    return (
        <StyledFooterSocialMedia key={id} href={href}>
            {media}
        </StyledFooterSocialMedia>
    )
}

export default Media