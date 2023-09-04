import React from 'react';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { EMPTY_DASHBOARD_DESCRIPTION, EMPTY_DASHBOARD_TITLE } from './constants';
import {
    StyledEmptyDashboardContainer,
    StyledEmptyDashboardDescription,
    StyledEmptyDashboardTitle,
    StyledEmptyDashboardWrapper
} from './styled';

const EmptyDashboard = ({ filteredSection }: any) => {
    return !filteredSection && (
        <StyledEmptyDashboardWrapper>
            <RemoveCircleIcon fontSize="large" />
            <StyledEmptyDashboardContainer>
                <StyledEmptyDashboardTitle>
                    {EMPTY_DASHBOARD_TITLE}
                </StyledEmptyDashboardTitle>
                <StyledEmptyDashboardDescription>
                    {EMPTY_DASHBOARD_DESCRIPTION}
                </StyledEmptyDashboardDescription>
            </StyledEmptyDashboardContainer>
        </StyledEmptyDashboardWrapper>
    )
}

export default EmptyDashboard;