import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { useApplicationRouterWidget } from "./hooks/use-application-router";

const App = () => {
  const { router } = useApplicationRouterWidget();
  return (
    <>
      <Suspense children={<RouterProvider router={router} />} fallback={<div>Loading...</div>} />
    </>
  )
}

export default App