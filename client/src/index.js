import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import AddTask from './views/AddTask/AddTask';
import UpdateTsak from './views/UpdateTsak/UpdateTsak';
import {createBrowserRouter , RouterProvider } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path : "/",
        element : <Home />
    },
    {
        path : "/add-task",
        element : <AddTask />
    },
    {
        path : "/updateTask/:_id",
        element : <UpdateTsak />
    }
])

root.render(
    <RouterProvider router={router} />
);


