import React from 'react'
import ReactDOM from 'react-dom/client'
import MainLayout from './MainLayout.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Home from './Pages/Home/Home.jsx';
import Instructors from './Pages/Instructors/Instructors.jsx';
import Classes from './Pages/Classes/Classes.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import NotFound404 from './Pages/NotFound404/NotFound404.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import ManageClasses from './Pages/Dashboard/AdminDashboard/ManageClasses.jsx';
import ManageUsers from './Pages/Dashboard/AdminDashboard/ManageUsers.jsx';
import MyClasses from './Pages/Dashboard/InstructorDashboard/MyClasses.jsx';
import AddClass from './Pages/Dashboard/InstructorDashboard/AddClass.jsx';
import SelectedClass from './Pages/Dashboard/StudentDashboard/SelectedClass.jsx';
import EnrolledClass from './Pages/Dashboard/StudentDashboard/EnrolledClass.jsx';
import Payment from './Pages/Dashboard/StudentDashboard/Payment.jsx';
import Feedback from './Pages/Dashboard/AdminDashboard/Feedback.jsx';
import UpdateClass from './Pages/Dashboard/InstructorDashboard/UpdateClass.jsx';


const queryClient = new QueryClient()
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
        element: <PrivateRoute><Profile /></PrivateRoute>
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
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: "/dashboard/admin/manageClasses",
        element: <PrivateRoute><ManageClasses /></PrivateRoute>
      },
      {
        path: "/dashboard/admin/manageClasses/feedback/:id",
        element: <PrivateRoute><Feedback /></PrivateRoute>
      },
      {
        path: "/dashboard/admin/manageUsers",
        element: <PrivateRoute><ManageUsers /></PrivateRoute>
      },
      {
        path: "/dashboard/instructor/myclasses",
        element: <PrivateRoute><MyClasses /></PrivateRoute>
      },
      {
        path: "/dashboard/instructor/updateclass/:id",
        element: <PrivateRoute><UpdateClass /></PrivateRoute>
      },
      {
        path: "/dashboard/instructor/addclass",
        element: <PrivateRoute><AddClass /></PrivateRoute>
      },
      {
        path: "/dashboard/student/selectedclass",
        element: <PrivateRoute><SelectedClass /></PrivateRoute>
      },
      {
        path: "/dashboard/student/enrolledclass",
        element: <PrivateRoute><EnrolledClass /></PrivateRoute>
      },
      {
        path: "/dashboard/student/payment",
        element: <PrivateRoute><Payment /></PrivateRoute>
      },
    ]
  },
  {
    path: "*",
    element: <NotFound404 />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
