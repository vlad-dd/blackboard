import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Root, Dashboard } from "../../components";
import WelcomePage from "../../components/welcome_page";
import { Registration, Login } from "../../components/auth";

export const useApplicationRouterWidget = () => {
    const router = createBrowserRouter([
        {
            element: <Root />,
            errorElement: <div>Error</div>,
            children: [
                {
                    path: "/",
                    element: (
                        <WelcomePage />
                    ),
                },
                {
                    path: "/dashboard",
                    element: <Dashboard />,
                },
            ]
        },
        {
            path: "/registration",
            element: <Registration />
        },
        {
            path: "/login",
            element: <Login />
        }
    ]);

    return {
        router
    };
};