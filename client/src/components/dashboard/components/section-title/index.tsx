import React from 'react'
import { Chip } from '@mui/material';
import { StyledSectionChipWrapper } from './styled';

const PlannerCardSection = ({ section }: any) => {
    return section && (
        <StyledSectionChipWrapper>
            <Chip label={section} color="primary" variant="outlined" />
        </StyledSectionChipWrapper>
    )
};

export default PlannerCardSection;