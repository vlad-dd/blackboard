import React from 'react';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Outlet } from 'react-router';
import Footer from '../footer'
import Modals from '../../modals';

const Root = () => {
  if(!window.localStorage.getItem("token")) {
    return (
      <div style={{ textAlign: "center", position: "relative", top: "50vh"}}>
        <RemoveCircleIcon fontSize="large"/>
        <div>You have not access to this page.</div>
      </div>
    )
  }
  return (
    <>
      <Modals />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root