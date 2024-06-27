import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";
import Detail from "./components/Detail/Detail";
import Chat from "./components/Chat/Chat";
import Order from "./pages/Order";
import HeaderLayout from "./layouts/Header/HeaderLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />
    },
    {
        element: <HeaderLayout />,
        children: [
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/chat',
                element: <Chat />
            },
            {
                path: '/menu',
                element: <Menu />
            }
        ]
    },
    {
        path: '/detail/:id',
        element: <Detail />
    },
    {
        path: '/order',
        element: <Order />
    }
])

export default router;