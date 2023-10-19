import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Addproduct from './components/layout/Addproduct';
import Category from './components/layout/Category';
import Details from './components/layout/Details';
import Home from './components/home/Home';
import MyCard from './components/layout/MyCard';
import NotFound from './components/home/NotFound';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root';
import Shop from './components/layout/Shop';
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
        element: <Addproduct />,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/mycart",
        element: <MyCard />,
        loader: () => fetch("http://localhost:5000/favourite"),
      },
      {
        path: "/updateproduct/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/category/:brand",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.brand}`),
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
