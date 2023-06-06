import React from 'react'
import ReactDOM from 'react-dom/client'
import MainLayout from './MainLayout.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Instructors from './Pages/Instructors/Instructors.jsx';
import Classes from './Pages/Classes/Classes.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import NotFound404 from './Pages/NotFound404/NotFound404.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/instructors",
        element: <Instructors />
      },
      {
        path: "/classes",
        element: <Classes />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "*",
    element: <NotFound404 />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
