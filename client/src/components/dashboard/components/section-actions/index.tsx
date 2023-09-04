import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSectionActionsWidget } from '../../use-section-actions-widget';
import { StyledActionsWrapper } from './styled';
import { DELETE_SECTION_TOOLTIP_MESSAGE, FILTER_SECTIONS_TOOLTIP_MESSAGE } from '../../constants';

const SectionActions = ({ selectedSectionId }: any) => {
    const { SECTION_ACTIONS } = useSectionActionsWidget(selectedSectionId);
    return (
        <StyledActionsWrapper>
            <Tooltip title={FILTER_SECTIONS_TOOLTIP_MESSAGE}>
                <IconButton
                    style={{ background: "white" }}
                    onClick={SECTION_ACTIONS.openFilterModal}
                >
                    <FilterAltIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title={DELETE_SECTION_TOOLTIP_MESSAGE}>
                <IconButton
                    style={{ background: "white" }}
                    disabled={!selectedSectionId}
                    onClick={SECTION_ACTIONS.deleteCurrentSection}
                >
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </StyledActionsWrapper>
    )
}

export default SectionActions