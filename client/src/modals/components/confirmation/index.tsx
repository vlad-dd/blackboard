import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop, Modal, Fade, Typography } from '@mui/material';
import { actionConfirmationStateSelector } from '../../../store/selectors';
import { closeActionConfirmationModal } from '../../../store/reducers/modals/confirmation';
import { setSelectedSectionId } from '../../../store/reducers/planner-cards';
import { CONFIRMATION_MODAL_CANCEL_BUTTON_TEXT, CONFIRMATION_MODAL_DELETE_BUTTON_TEXT } from './constants';
import { StyledCardFormBox } from '../styled';
import { StyledButton, StyledConfirmationButtonContainer } from './styled';

const ConfirmationModal = () => {
  const dispatch = useDispatch();
  const { isOpen, message, action } = useSelector(actionConfirmationStateSelector);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeActionConfirmationModal())}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <StyledCardFormBox>
            <Typography variant="h6">
              {message}
            </Typography>
            <StyledConfirmationButtonContainer>
              <StyledButton
                variant="outlined"
                onClick={() => dispatch(closeActionConfirmationModal())}
              >
                {CONFIRMATION_MODAL_CANCEL_BUTTON_TEXT}
              </StyledButton>
              <StyledButton
                color='error'
                variant="contained"
                onClick={() => {
                  action();
                  dispatch(closeActionConfirmationModal());
                }}
              >
                {CONFIRMATION_MODAL_DELETE_BUTTON_TEXT}
              </StyledButton>
            </StyledConfirmationButtonContainer>
          </StyledCardFormBox>
        </Fade>
      </Modal>
    </div>
  );
}

export default ConfirmationModal;