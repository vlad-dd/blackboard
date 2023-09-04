import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useMenuOptionsWidget } from '../../widgets';
import { HEADER_MENU_ITEMS } from '../../constants';

const MenuButton = ({ open, handleClick, anchorEl, handleClose, toggleDrawer }: any) => {
    const { MENU_ACTIONS } = useMenuOptionsWidget(handleClose);

    return (
        <>
            <Button onClick={handleClick}>
                <MenuIcon />
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem disabled onClick={handleClose}>
                    <span onClick={toggleDrawer("left", true)}>
                        {HEADER_MENU_ITEMS.DASHBOARD}
                    </span>
                </MenuItem>
                <MenuItem disabled onClick={handleClose}>
                    {HEADER_MENU_ITEMS.SETTINGS}
                </MenuItem>
                <MenuItem onClick={MENU_ACTIONS.logOut}>
                    {HEADER_MENU_ITEMS.LOGOUT}
                </MenuItem>
            </Menu>
        </>
    )
}

export default MenuButton