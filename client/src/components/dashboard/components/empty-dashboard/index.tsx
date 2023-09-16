import React from 'react';
import {
    StyledEmptyDashboardContainer,
    StyledEmptyDashboardDescription,
    StyledEmptyDashboardTitle,
    StyledEmptyDashboardWrapper
} from './styled';

const EmptyDashboard = ({ title, description, Icon }: any) => {
    return (
        <StyledEmptyDashboardWrapper>
            <Icon fontSize="large" />
            <StyledEmptyDashboardContainer>
                <StyledEmptyDashboardTitle>
                    {title}
                </StyledEmptyDashboardTitle>
                <StyledEmptyDashboardDescription>
                    {description}
                </StyledEmptyDashboardDescription>
            </StyledEmptyDashboardContainer>
        </StyledEmptyDashboardWrapper>
    )
}

export default EmptyDashboard;