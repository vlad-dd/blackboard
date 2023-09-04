import React from 'react'
import { Modal, Typography } from '@mui/material'
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import { dateFormatter } from '../../../utils';
import { useUserProfileWidget } from './use-user-profile-widget';
import { USER_PROFILE_MODAL_ACTIVE_CARDS_TEXT } from './constants';
import {
    StyledCloseUserProfileIcon,
    StyledDateContainer,
    StyledUserProfileAvatar,
    StyledUserProfileBox,
    StyledUserProfileContainer,
    StyledUserProfileInformation
} from './styled';

const UserProfileModal = () => {
    const {
        isOpen,
        avatarUrl,
        fullName,
        email,
        createdAt,
        cards,
        closeUserProfile
    } = useUserProfileWidget();

    return (
        <Modal
            open={isOpen}
            onClose={closeUserProfile}
        >
            <StyledUserProfileBox>
                <StyledCloseUserProfileIcon
                    onClick={closeUserProfile}
                />
                <StyledUserProfileContainer>
                    <StyledUserProfileAvatar src={avatarUrl} variant="square" />
                    <StyledUserProfileInformation>
                        <Typography variant="h6">
                            {fullName}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            {email}
                        </Typography>
                        <Typography>
                            {USER_PROFILE_MODAL_ACTIVE_CARDS_TEXT} {cards.length}
                        </Typography>
                        <StyledDateContainer sx={{ mt: 2 }}>
                            <CalendarMonthTwoToneIcon />
                            {dateFormatter(createdAt)}
                        </StyledDateContainer>
                    </StyledUserProfileInformation>
                </StyledUserProfileContainer>
            </StyledUserProfileBox>
        </Modal>
    )
}

export default UserProfileModal;