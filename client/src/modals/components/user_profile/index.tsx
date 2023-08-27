import { Avatar, Box, Modal, Typography } from '@mui/material'
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { closeUserProfileModal } from '../../../store/reducers/modals/user_profile';
import { authUserSelector, plannerCardsSelector, userProfileModalStateSelector } from '../../../store/selectors';
import { dateFormatter } from '../../../utils';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    color: "black",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const UserProfileModal = () => {
    const dispatch = useDispatch();
    const { user: { fullName, email, avatarUrl, createdAt } } = useSelector(authUserSelector);
    const { isOpen } = useSelector(userProfileModalStateSelector);
    const { cards } = useSelector(plannerCardsSelector);

    return (
        <Modal
            open={isOpen}
            onClose={() => dispatch(closeUserProfileModal())}
        >
            <Box sx={style}>
                <div style={{ position: "absolute", right: 20 }}>
                    <CloseIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => dispatch(closeUserProfileModal())}
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Avatar src={avatarUrl} variant="square" style={{ height: "20vh", width: "10vw", objectFit: "cover" }} />
                    <div>
                        <Typography variant="h6" component="h2">
                            {fullName}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {email}
                        </Typography>
                        <Typography>
                            Active cards: {cards.length}
                        </Typography>
                        <Typography style={{ display: "flex", alignItems: "center" }} sx={{ mt: 2 }}>
                            <CalendarMonthTwoToneIcon />
                            {dateFormatter(createdAt)}
                        </Typography>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default UserProfileModal;