import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Addproduct from './components/layout/Addproduct';
import AuthProvider from './components/provider/AuthProvider';
import Category from './components/layout/Category';
import Details from './components/layout/Details';
import Home from './components/home/Home';
import Login from './components/home/Login';
import MyCard from './components/layout/MyCard';
import NotFound from './components/home/NotFound';
import PrivateRouter from './components/home/PrivateRouter';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root';
import Shop from './components/layout/Shop';
import Signup from './components/home/Signup';
import UpdateProduct from './components/layout/UpdateProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("./brand.json"),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRouter>
            <Addproduct />
          </PrivateRouter>
        ),
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: () =>
          fetch(
            "https://dotmart-store-server-5rn8ph2vr-mdhasanuzzamanshohag.vercel.app/product"
          ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRouter>
            <MyCard />
          </PrivateRouter>
        ),
        loader: () =>
          fetch(
            "https://dotmart-store-server-5rn8ph2vr-mdhasanuzzamanshohag.vercel.app/favourite"
          ),
      },
      {
        path: "/updateproduct/:id",
        element: (
          <PrivateRouter>
            <UpdateProduct />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://dotmart-store-server-5rn8ph2vr-mdhasanuzzamanshohag.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRouter>
            <Details />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://dotmart-store-server-5rn8ph2vr-mdhasanuzzamanshohag.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/category/:brand",
        element: (
          <PrivateRouter>
            <Category />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://dotmart-store-server-5rn8ph2vr-mdhasanuzzamanshohag.vercel.app/category/${params.brand}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
