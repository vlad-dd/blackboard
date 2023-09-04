
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import DoneIcon from '@mui/icons-material/Done';
import { StyledMoreVertIcon, StyledPlannerCardOptionsMenu } from '../../styled'
import { usePlannerCardWidget } from './use-planner-card-widget';
import { Divider, IconButton, MenuItem } from '@mui/material';
import { PLANNER_CARD_MENU_OPTIONS } from '../../constants';

const PlannerCardMenuOptions = ({ sectionId, selectedCardId }) => {
    const {
        anchorEl,
        open,
        plannerCardFunctional,
        openPlannerCardOptionsMenu,
        closePlannerCardOptionsMenu
    } = usePlannerCardWidget(sectionId, selectedCardId);
    return (
        <>
            <IconButton>
                <StyledMoreVertIcon
                    onClick={(e: any) => openPlannerCardOptionsMenu(e)}
                />
            </IconButton>
            <StyledPlannerCardOptionsMenu
                anchorEl={anchorEl}
                open={open}
                onClose={closePlannerCardOptionsMenu}
                elevation={0}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}>
                <MenuItem disabled disableRipple>
                    <DoneIcon />
                    {PLANNER_CARD_MENU_OPTIONS.MARK_AS_DONE}
                </MenuItem>
                <MenuItem onClick={plannerCardFunctional.edit} disableRipple>
                    <EditIcon />
                    {PLANNER_CARD_MENU_OPTIONS.EDIT}
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem disabled onClick={closePlannerCardOptionsMenu} disableRipple>
                    <ArchiveIcon />
                    {PLANNER_CARD_MENU_OPTIONS.ARCHIVE}
                </MenuItem>
                <MenuItem onClick={plannerCardFunctional.delete}
                    disableRipple
                >
                    <DeleteIcon />
                    {PLANNER_CARD_MENU_OPTIONS.DELETE}
                </MenuItem>
            </StyledPlannerCardOptionsMenu>
        </>
    )
}

export default PlannerCardMenuOptions