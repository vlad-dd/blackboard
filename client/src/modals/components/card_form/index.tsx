
import React from "react";
import { Button, Modal, Switch, TextField, Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import { setSelectedSectionId } from "../../../store/reducers/planner-cards";
import { closeCardFormModal } from "../../../store/reducers/modals/card_form";
import { useCardFormModalWidget } from "./use-card-form-modal-widget";
import {
    CARD_CREATION_BUTTON_MESSAGE,
    CARD_CREATION_DESCRIPTION_LABEL,
    CARD_CREATION_FORM_TITLE,
    CARD_CREATION_TASK_LABEL,
    NEW_SECTION_CHECKBOX_LABEL,
    NEW_SECTION_LABEL,
    SELECT_INPUT_LABEL
} from "./constants";
import { StyledCardFormBox, StyledCardHeaderTitle, StyledFormControlLabel } from "../styled";

const CardFormModal = () => {
    const {
        isOpen,
        cards,
        showCreateNewSectionInput,
        section,
        placeholder,
        isDisabled,
        dispatch,
        setSection,
        setShowCreateNewSectionInput,
        setTask,
        setDescription,
        setPlaceholder,
        savePlannerCardToDB
    } = useCardFormModalWidget();

    return (
        <Modal
            open={isOpen}
            onClose={() => dispatch(closeCardFormModal())}
        >
            <StyledCardFormBox>
                <StyledCardHeaderTitle variant="h6">
                    {CARD_CREATION_FORM_TITLE}
                </StyledCardHeaderTitle>
                {!showCreateNewSectionInput &&
                    <FormControl fullWidth>
                        <InputLabel required>
                            {SELECT_INPUT_LABEL}
                        </InputLabel>
                        <Select
                            value={placeholder}
                            label={SELECT_INPUT_LABEL}
                            onChange={({ target: { value } }) => setPlaceholder(value)}
                        >
                            {cards.map(({ _id, section }: any) => (
                                <MenuItem
                                    value={section}
                                    onClick={() => dispatch(setSelectedSectionId(_id))}
                                >
                                    {section}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                }
                {showCreateNewSectionInput && <TextField
                    required
                    label={NEW_SECTION_LABEL}
                    value={section}
                    onChange={({ target: { value } }) => setSection(value)}
                />}
                <StyledFormControlLabel
                    label={NEW_SECTION_CHECKBOX_LABEL}
                    control={
                        <Switch
                            onChange={({ target: { checked } }) => setShowCreateNewSectionInput(checked)}
                        />
                    }
                />
                <TextField
                    required
                    label={CARD_CREATION_TASK_LABEL}
                    onChange={({ target: { value } }) => setTask(value)}
                />
                <TextField
                    multiline
                    label={CARD_CREATION_DESCRIPTION_LABEL}
                    onChange={({ target: { value } }) => setDescription(value)}
                />
                <Button
                    disabled={isDisabled}
                    onClick={savePlannerCardToDB}
                    variant="contained"
                >
                    {CARD_CREATION_BUTTON_MESSAGE}
                </Button>
            </StyledCardFormBox>
        </Modal >
    )
}

export default CardFormModal;