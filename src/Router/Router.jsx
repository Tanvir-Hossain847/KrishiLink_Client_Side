import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import Registration from '../Pages/Register';
import Login from '../Pages/Login';
import Root from '../Layouts/Root';
import AllProducts from '../Pages/AllProducts';
import BIds from '../Pages/BIds';
import Profile from '../Pages/Profile';

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<p>Add Firebase</p>,
    children: [
        {
            index: true,
            path:'/',
            element:<Home></Home>,
        },
        {
          path: '/products',
          element: <AllProducts></AllProducts>
        },
        {
          path: '/bids',
          element: <BIds></BIds>
        },
        {
          path: '/profile',
          element: <Profile></Profile>
        },
        {
          path:'/register',
          element:<Registration></Registration>
        },
        {
          path:'/login' ,
         element:<Login></Login>
        },
       
    ]
  },
]);
