import React from "react";
import { PlannerCard, AddNewPlannerCard, DashboardHeader } from './components';
import { useDashboardWidget } from "./use-dashboard-widget";
import {
    StyledDashboardWrapper,
    StyledDashboardContainer
} from './styled';

const Dashboard = () => {
    const { cards } = useDashboardWidget();

    return (
        <>
            <StyledDashboardWrapper>
                <DashboardHeader />
                <StyledDashboardContainer>
                    {cards?.map((props: any) => <PlannerCard {...props} />)}
                </StyledDashboardContainer>
                <AddNewPlannerCard />
            </StyledDashboardWrapper>
        </>
    )
}

export default Dashboard;