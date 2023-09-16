import React from "react";
import { useDashboardHeaderWidget } from "./widgets/use-dashboard-header-widget";
import { DesignStar } from '../../../../common'
import { useListOptionsWidget } from './widgets';
import { MenuDrawer, MenuButton } from './components';
import { DASHBOARD_HEADER_STAR_COLOR, DASHBOARD_HEADER_TITLE } from "./constants";
import {
    StyledDashboardAvatarContainer,
    StyledDashboardHeader,
    StyledDashboardHeaderContainer,
    StyledDashboardTitle,
    StyledUserAvatar
} from './styled';

const DashboardHeader = () => {
    const { open, state, anchorEl, list, handleClick, handleClose, toggleDrawer } = useListOptionsWidget();
    const { sectionHeaderTitle, avatarUrl, fullName, openProfileModal } = useDashboardHeaderWidget();
    return (
        <StyledDashboardHeaderContainer>
            <StyledDashboardHeader>
                <DesignStar color={DASHBOARD_HEADER_STAR_COLOR} />
                <StyledDashboardTitle>
                    {sectionHeaderTitle ?? DASHBOARD_HEADER_TITLE}
                </StyledDashboardTitle>
            </StyledDashboardHeader>

            <StyledDashboardAvatarContainer>
                <StyledUserAvatar
                    src={avatarUrl}
                    onClick={openProfileModal}
                />
                {fullName}
                <MenuButton
                    open={open}
                    anchorEl={anchorEl}
                    handleClick={handleClick}
                    handleClose={handleClose}
                    toggleDrawer={toggleDrawer}
                />
            </StyledDashboardAvatarContainer>
            <MenuDrawer {...{ state, list, toggleDrawer }} />
        </StyledDashboardHeaderContainer>
    )
}

export default DashboardHeader