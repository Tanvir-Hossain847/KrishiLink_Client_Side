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
import AddCrop from '../Pages/AddCrop';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MyPosts from '../Pages/MyPosts';
import MyInterests from '../Pages/MyInterests';
import UpdateProfile from '../Components/UpdateProfile';

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
            loader: () => fetch('https://krishilink-server-side-beta.vercel.app/myproducts')
        },
        {
          path: '/allcrops',
          element: <AllProducts></AllProducts>,
        },
        {
          path: '/allcrops/:id',
          element: (
            <PrivateRoute>
              <SingleCropDetail></SingleCropDetail>
            </PrivateRoute>
          ) 
        },
        {
          path: '/addcrops',
          element:(
            <PrivateRoute>
              <AddCrop></AddCrop>
            </PrivateRoute>
          )
        },
        {
          path: '/myposts',
          element: (
            <PrivateRoute>
              <MyPosts></MyPosts>
            </PrivateRoute>
          )
        },
        {
          path: '/myinterests',
          element: (
            <PrivateRoute>
              <MyInterests></MyInterests>
            </PrivateRoute>
          )
        },
        {
          path: '/profile',
          element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
          )
        },
        {
          path: '/editprofile',
          element: (
            <PrivateRoute>
              <UpdateProfile></UpdateProfile>
            </PrivateRoute>
          )
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
