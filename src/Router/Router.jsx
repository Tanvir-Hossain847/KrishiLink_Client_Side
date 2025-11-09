import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import Registration from '../Pages/Register';
import Login from '../Pages/Login';
import Root from '../Layouts/Root';
import AllProducts from '../Pages/AllProducts';
import BIds from '../Pages/BIds';
import Profile from '../Pages/Profile';
import ErrorPage from '../Pages/ErrorPage';
import SingleCropDetail from '../Pages/SingleCropDetail';

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
          path: '/allcrops',
          element: <AllProducts></AllProducts>,
          loader: () => fetch('http://localhost:3000/myproducts')
        },
        {
          path: '/allcrops/:id',
          element: <SingleCropDetail></SingleCropDetail>
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
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }
]);
