import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Addproduct from './components/layout/Addproduct';
import Home from './components/home/Home';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root';
import Shop from './components/layout/Shop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
