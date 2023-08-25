import { Button, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { removeItemFromLocalStorage } from '../../../../../../utils';

const MenuButton = ({ open, handleClick, anchorEl, handleClose, toggleDrawer }: any) => {
    const navigate = useNavigate();
    const logOut = () => {
        removeItemFromLocalStorage("token");
        handleClose();
        navigate("/login");    
    };

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