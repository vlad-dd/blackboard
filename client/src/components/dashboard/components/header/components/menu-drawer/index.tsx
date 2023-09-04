import React from 'react';
import { Drawer } from '@mui/material';

const MenuDrawer = ({ state, list, toggleDrawer }: any) => {
    return (
        <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
        >
            {list("left")}
        </Drawer>
    )
}

export default MenuDrawer