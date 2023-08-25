import React from 'react';
import { Outlet } from 'react-router';
import { DeniedAccess } from '../../global/errors';
import { getToken } from '../../utils';
import Modals from '../../modals';
import Popups from '../../popups';
import Footer from '../footer'
import { useRootWidget } from './widgets';
import { GLOBAL_ERROR_MESSAGE } from './constants';

const Root = () => {
  const { hasGlobalError } = useRootWidget();

  if (!getToken()) {
    return <DeniedAccess />;
  };

  if(hasGlobalError){
    return <DeniedAccess globalError={GLOBAL_ERROR_MESSAGE} />
  };

  return (
    <>
      <Modals />
      <Popups />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root;