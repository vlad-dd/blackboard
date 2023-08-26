import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useMenuOptionsWidget } from '../../widgets';

const MenuButton = ({ open, handleClick, anchorEl, handleClose, toggleDrawer }: any) => {
    const { logOut } = useMenuOptionsWidget(handleClose);

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
                <MenuItem onClick={handleClose}>
                    <span onClick={toggleDrawer("left", true)}>Dashboard</span>
                </MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={logOut}>Log out</MenuItem>
            </Menu>
        </>
    )
}

export default MenuButton