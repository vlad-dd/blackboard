import React from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { size } from "lodash-es";
import { useDashboardWidget } from "./use-dashboard-widget";
import {
    PlannerCard,
    AddNewPlannerCard,
    DashboardHeader,
    SectionActions,
    DashboardErrorPage
} from './components';
import {
    StyledDashboardWrapper,
    StyledDashboardContainer
} from './styled';
import { EMPTY_DASHBOARD_DESCRIPTION, EMPTY_DASHBOARD_TITLE, EMPTY_SECTION_DESCRIPTION, EMPTY_SECTION_TITLE } from "./components/empty-dashboard/constants";

const Dashboard = () => {
    const {
        filteredSection,
        selectedSectionId,
    } = useDashboardWidget();
    return (
        <>
            <StyledDashboardWrapper>
                <DashboardHeader />
                <SectionActions selectedSectionId={selectedSectionId} />
                <StyledDashboardContainer>
                    {filteredSection?.cards.map((props: any) => <PlannerCard sectionId={filteredSection?._id} {...props} />)}
                    <DashboardErrorPage
                        selectedSectionId={selectedSectionId}
                        filteredSection={filteredSection}
                    />
                </StyledDashboardContainer>
                <AddNewPlannerCard />
            </StyledDashboardWrapper>
        </>
    )
}

export default Dashboard;