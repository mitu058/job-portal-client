import React, { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../LayOut/MainLayOut';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        errorElement:<h2>Page not found</h2>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
          
        ]
    }
     
])


export default Router;