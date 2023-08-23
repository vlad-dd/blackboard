import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { closeUserProfileModal } from '../../../store/reducers/modals/user_profile';
import { authUserSelector, userProfileModalStateSelector } from '../../../store/selectors';

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

    return (
        <Modal
            open={isOpen}
            onClose={() => dispatch(closeUserProfileModal())}
        >
            <Box sx={style}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6" component="h2">
                        {fullName}
                    </Typography>
                    <CloseIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => dispatch(closeUserProfileModal())}
                    />
                </div>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {email}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <img style={{ height: "300px" }} src={avatarUrl} />
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {createdAt}
                </Typography>
            </Box>
        </Modal>
    )
}

export default UserProfileModal;