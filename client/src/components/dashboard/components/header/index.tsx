import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { openUserProfileModal } from '../../../../store/reducers/modals/user_profile';
import { authUserSelector } from '../../../../store/selectors';
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
    const dispatch = useDispatch();
    const { open, state, anchorEl, list, handleClick, handleClose, toggleDrawer } = useListOptionsWidget();
    const { user: { email, fullName, avatarUrl, ...other } } = useSelector(authUserSelector);

    return (
        <StyledDashboardHeaderContainer>
            <StyledDashboardHeader>
                <DesignStar color={DASHBOARD_HEADER_STAR_COLOR} />
                <StyledDashboardTitle>
                    {DASHBOARD_HEADER_TITLE}
                </StyledDashboardTitle>
            </StyledDashboardHeader>

            <StyledDashboardAvatarContainer>
                <StyledUserAvatar
                    src={avatarUrl}
                    onClick={() => dispatch(openUserProfileModal())}
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