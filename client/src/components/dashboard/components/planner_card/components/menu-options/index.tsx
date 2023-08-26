
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import { StyledMoreVertIcon, StyledPlannerCardOptionsMenu } from '../../styled'
import { usePlannerCardWidget } from './use-planner-card-widget';
import { Divider, MenuItem } from '@mui/material';
import { PLANNER_CARD_MENU_OPTIONS } from '../../constants';

const PlannerCardMenuOptions = ({ selectedCardId }) => {
    const {
        anchorEl,
        open,
        plannerCardFunctional,
        openPlannerCardOptionsMenu,
        closePlannerCardOptionsMenu
    } = usePlannerCardWidget(selectedCardId);
    return (
        <>
            <StyledMoreVertIcon onClick={(e: any) => openPlannerCardOptionsMenu(e)} />
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
                <MenuItem onClick={plannerCardFunctional.edit} disableRipple>
                    <EditIcon />
                    {PLANNER_CARD_MENU_OPTIONS.EDIT}
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={closePlannerCardOptionsMenu} disableRipple>
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