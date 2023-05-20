import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Error from "../Pages/Error/Error";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateMyToy from "../Pages/MyToys/UpdateMyToy";
import SingleToyDetails from "../Pages/SingleToyDetails/SingleToyDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addtoy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>,
                loader:()=>fetch('https://server-site-pi.vercel.app/totaltoys')
            },
            {
                path: '/mytoys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/updatemytoy/:id',
                element: <UpdateMyToy></UpdateMyToy>,
                loader: ({ params }) => fetch(`https://server-site-pi.vercel.app/mytoy/${params.id}`)
            },
            {
                path: '/toy/:id',
                element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-site-pi.vercel.app/mytoy/${params.id}`)
            },
        ]
    },
]);

export default router;