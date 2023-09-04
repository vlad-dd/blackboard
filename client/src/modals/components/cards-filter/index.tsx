import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { cardsFilterModalStateSelector, plannerCardsSelector } from "../../../store/selectors";
import { closeCardsFilterModal } from "../../../store/reducers/modals/cards-filter";
import { setSelectedSectionId } from "../../../store/reducers/planner-cards";
import { FILTER_CARD_SECTION_INPUT_LABEL, FILTER_CARD_TITLE } from "./constants";
import { StyledCardFormBox, StyledCardHeaderTitle } from "../styled";

const CardsFilterModal = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector(cardsFilterModalStateSelector);
    const { cards } = useSelector(plannerCardsSelector)
    const [filteredSection, setFilteredSection] = useState('');

    return (
        <Modal
            open={isOpen}
            onClose={() => dispatch(closeCardsFilterModal())}
        >
            <StyledCardFormBox>
                <StyledCardHeaderTitle variant="h6">
                    {FILTER_CARD_TITLE}
                </StyledCardHeaderTitle>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel>
                            {FILTER_CARD_SECTION_INPUT_LABEL}
                        </InputLabel>
                        <Select
                            label={FILTER_CARD_SECTION_INPUT_LABEL}
                            value={filteredSection}
                            onChange={({ target: { value } }) => setFilteredSection(value)}
                        >
                            {cards.map(({ _id, section }) => (
                                <MenuItem
                                    value={section}
                                    onClick={() => {
                                        dispatch(setSelectedSectionId(_id));
                                        dispatch(closeCardsFilterModal());
                                    }}
                                >
                                    {section}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </StyledCardFormBox>
        </Modal >
    )
}

export default CardsFilterModal;