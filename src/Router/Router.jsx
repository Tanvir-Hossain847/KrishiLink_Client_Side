import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import Registration from '../Pages/Register';
import Login from '../Pages/Login';
import Root from '../Layouts/Root';
import AllProducts from '../Pages/AllProducts';
import ErrorPage from '../Pages/ErrorPage';
import SingleCropDetail from '../Pages/SingleCropDetail';
import AddCrop from '../Pages/AddCrop';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MyPosts from '../Pages/MyPosts';
import MyInterests from '../Pages/MyInterests';
import NewsPage from '../Pages/NewsPage';
import Cart from '../Pages/Cart';
import DashboardLayout from '../Layouts/DashboardLayout';
import Profile from '../Pages/Profile';
import Overview from '../Pages/Overview';
import AboutUs from '../Pages/AboutUs';
import ContactUs from '../Pages/ContactUs';

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
            loader: () => fetch('http://localhost:3000/myproducts')
        },
        {
          path: '/allcrops',
          element: <AllProducts></AllProducts>,
        },
        {
          path: '/allcrops/:id',
          element: (
              <SingleCropDetail></SingleCropDetail>
          ) 
        },
        {
          path: '/news/:id',
          element: <NewsPage></NewsPage>
        },
        {
          path: '/cart',
          element: <Cart></Cart>
        },
        {
          path: '/about',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/contact',
          element: <ContactUs></ContactUs>
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
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Overview></Overview>
      },
      {
        path: 'overview',
        element: <Overview></Overview>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'add-crop',
        element: <AddCrop></AddCrop>
      },
      {
        path: 'my-posts',
        element: <MyPosts></MyPosts>
      },
      {
        path: 'my-interests',
        element: <MyInterests></MyInterests>
      }
    ]
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }
]);
