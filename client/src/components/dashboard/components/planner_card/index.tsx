import React from 'react';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
    StyledPlannerCard,
    StyledCardCategory,
    StyledCardDescription,
    StyledCardDate,
    StyledDeleteIcon
} from './styled';
import { API } from '../../../../api';
import { useDispatch } from 'react-redux';
import { setUpdateNotification } from '../../../../store/reducers/planner-cards';
import { openEditCardInformationFormModal, saveSelectedCardId } from '../../../../store/reducers/modals/edit_card_information_form';

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

const PlannerCard = ({ _id, task, description, createdAt }: any) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();

    const deletePlannerCard = async (id: any) => {
        try {
            await API.deletePlannerCard(window.localStorage.getItem("token"), id);
            dispatch(setUpdateNotification("Planner card was deleted successfully!"))
        } catch (error) {
            console.log("error")
        }
    }

    const editPlannerCardInformation = () => {
        dispatch(openEditCardInformationFormModal())
        dispatch(saveSelectedCardId(_id))
        handleClose();
    }

    const handlePlannerCardDelete = () => {
        deletePlannerCard(_id)
        handleClose();
    }

    return (
        <StyledPlannerCard key={_id}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <StyledCardCategory>{task}</StyledCardCategory>
                <div>
                    <MoreVertIcon
                     style={{ cursor: "pointer" }}
                     onClick={(e: any) => handleClick(e)} 
                     />
                    <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={editPlannerCardInformation} disableRipple>
                            <EditIcon />
                            Edit
                        </MenuItem>
                        <Divider sx={{ my: 0.5 }} />
                        <MenuItem onClick={handleClose} disableRipple>
                            <ArchiveIcon />
                            Archive
                        </MenuItem>
                        <MenuItem onClick={() => handlePlannerCardDelete()} 
                          disableRipple
                          >
                            <DeleteIcon />
                            Delete
                        </MenuItem>
                    </StyledMenu>
                </div>
                {/* <StyledDeleteIcon
                    onClick={() => deletePlannerCard(_id)}
                /> */}
            </div>
            <StyledCardDescription>{description}</StyledCardDescription>
            <StyledCardDate>
                <CalendarMonthTwoToneIcon />
                {createdAt}
            </StyledCardDate>
        </StyledPlannerCard>
    )
};

export default PlannerCard