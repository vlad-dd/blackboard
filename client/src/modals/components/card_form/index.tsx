
import { Button, Modal, TextField, Typography } from "@mui/material";
import React from "react";
import { closeCardFormModal } from "../../../store/reducers/modals/card_form";
import { useCardFormModalWidget } from "./use-card-form-modal-widget";
import { StyledCardFormBox, StyledCardHeaderTitle } from "../styled";

const CardFormModal = () => {

    const {
        isOpen,
        isDisabled,
        dispatch,
        setTitle,
        setDescription,
        savePlannerCardToDB
    } = useCardFormModalWidget();

    return (
        <Modal
            open={isOpen}
            onClose={() => dispatch(closeCardFormModal())}
        >
            <StyledCardFormBox>
                <StyledCardHeaderTitle variant="h6">
                    Create New Card
                </StyledCardHeaderTitle>
                <TextField
                    label="Title"
                    onChange={({ target: { value } }) => setTitle(value)}
                />
                <TextField
                    multiline
                    label="Description"
                    onChange={({ target: { value } }) => setDescription(value)}
                />
                <Button
                    disabled={isDisabled}
                    onClick={savePlannerCardToDB}
                    variant="contained">
                    Create
                </Button>
            </StyledCardFormBox>
        </Modal >
    )
}

export default CardFormModal;