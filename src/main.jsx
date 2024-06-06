import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Home from "./pages/home"
import Qr from "./pages/qr"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> 
  },{
    path: "/qr",
    element: <Qr />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
