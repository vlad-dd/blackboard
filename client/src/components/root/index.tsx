import React, { useEffect, useLayoutEffect } from 'react';
import { Outlet } from 'react-router';
import { DeniedAccess } from '../../global/errors';
import { GLOBAL_APPLICATION_ROUTES } from '../../global/routes';
import { getToken } from '../../utils';
import Modals from '../../modals';
import Popups from '../../popups';
import Footer from '../footer'
import { useRootWidget } from './widgets';
import { GLOBAL_ERROR_MESSAGE } from './constants';

const Root = () => {
  const { hasGlobalError, navigate } = useRootWidget();

  useEffect(() => {
    if (!getToken()) {
      navigate(GLOBAL_APPLICATION_ROUTES.LOGIN);
    };
  }, []);

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