import React from "react";
import { useDashboardWidget } from "./use-dashboard-widget";
import {
    PlannerCard,
    AddNewPlannerCard,
    DashboardHeader,
    PlannerCardSection,
    SectionActions,
    EmptyDashboard
} from './components';
import {
    StyledDashboardWrapper,
    StyledDashboardContainer
} from './styled';

const Dashboard = () => {
    const {
        filteredSection,
        selectedSectionId,
    } = useDashboardWidget();
    return (
        <>
            <StyledDashboardWrapper>
                <DashboardHeader />
                <PlannerCardSection section={filteredSection?.section} />
                <SectionActions selectedSectionId={selectedSectionId} />
                <StyledDashboardContainer>
                    {filteredSection?.cards.map((props: any) => <PlannerCard sectionId={filteredSection?._id} {...props} />)}
                    <EmptyDashboard filteredSection={filteredSection} />
                </StyledDashboardContainer>
                <AddNewPlannerCard />
            </StyledDashboardWrapper>
        </>
    )
}

export default Dashboard;