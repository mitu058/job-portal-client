import React, { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../LayOut/MainLayOut';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddJob from '../components/AddJob';
import JobDetails from '../pages/JobDetails';
import JobApply from '../pages/JobApply';

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
                path:'/jobs/:id',
                element:<JobDetails></JobDetails>,
                loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
              path:'/jobApply/:id',
              element:<JobApply></JobApply>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addjob',
                element:<AddJob></AddJob>
            }
          
        ]
    }
     
])


export default Router;