import React from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { DENIED_ACCESSS_MESSAGE } from '../../constants';
import { StyledDeniedAccessWrapper } from '../styled';

interface IDeniedAccess {
    globalError?: any
}

const DeniedAccess = ({ globalError }: IDeniedAccess) => {
    return (
        <StyledDeniedAccessWrapper>
            <RemoveCircleIcon fontSize="large" />
            <div>{globalError ?? DENIED_ACCESSS_MESSAGE}</div>
        </StyledDeniedAccessWrapper>
    )
}

export default DeniedAccess;