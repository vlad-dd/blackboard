
import React from "react";
import { Button, Modal, TextField } from "@mui/material";
import { useEditCardFormWidget } from "./use-edit-card-form-widget";
import {
    EDIT_CARD_MODAL_DESCRIPTION_LABEL,
    EDIT_CARD_MODAL_SUBMIT_BUTTON_TEXT,
    EDIT_CARD_MODAL_TASK_LABEL,
    EDIT_CARD_MODAL_TITLE
} from "./constants";
import { StyledCardFormBox, StyledCardHeaderTitle } from "../styled";

const EditCardFormModal = () => {
    const {
        isOpen,
        task,
        description,
        isDisabled,
        setTask,
        setDescription,
        saveEditPlannerCard,
        closeEditFormModal
    } = useEditCardFormWidget();

    return (
        <Modal
            open={isOpen}
            onClose={closeEditFormModal}
        >
            <StyledCardFormBox>
                <StyledCardHeaderTitle variant="h6">
                    {EDIT_CARD_MODAL_TITLE}
                </StyledCardHeaderTitle>
                <TextField
                    label={EDIT_CARD_MODAL_TASK_LABEL}
                    value={task}
                    onChange={({ target: { value } }) => setTask(value)}
                />
                <TextField
                    multiline
                    label={EDIT_CARD_MODAL_DESCRIPTION_LABEL}
                    value={description}
                    onChange={({ target: { value } }) => setDescription(value)}
                />
                <Button
                    disabled={isDisabled}
                    onClick={saveEditPlannerCard} variant="contained">
                    {EDIT_CARD_MODAL_SUBMIT_BUTTON_TEXT}
                </Button>
            </StyledCardFormBox>
        </Modal>
    )
}

export default EditCardFormModal;