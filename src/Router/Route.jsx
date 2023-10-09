import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/HomePage/Home";
import About from "../Pages/AboutPage/About";
import Service from "../Pages/ServicePages/Service";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/RegisterPage/Register";
import Error from "../Pages/ErrorPages/Error";
import Details from "../Pages/Details";
import PriveteRout from "./PriveteRout";

const router = createBrowserRouter([
    {
     path: "/",
     element: <Root></Root>,
     errorElement : <Error></Error>,
     children: [
         {
           path: "/",
           element:<Home></Home>
         },
         {
           path: "/about",
           element:<About></About>
         },
         {
           path: "/details/:id",
           element:<PriveteRout><Details></Details></PriveteRout>,
           loader :() => fetch ('/Features.json')
         },
         {
           path: "/service",
           element:<Service></Service>
         },
         {
           path: "/login",
           element:<Login></Login>
         },
         {
           path: "/register",
           element:<Register></Register>
         },
         
         
       ],
   },

])

export default router