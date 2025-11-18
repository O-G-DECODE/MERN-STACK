import { createBrowserRouter } from "react-router";
import DashBoard from "../pages/dashboard";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import HomePage from "../pages/home";

const router = createBrowserRouter([
  { path: '',
    element: <DashBoard />,
   },
   {
    path:'login',
    element: <Login />,
   },
   {
    path:'signup',
    element: <SignUp />,
   },
  {
    path:'home',
    element: <HomePage />,  
  }
  ]
);

export default router;