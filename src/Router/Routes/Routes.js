import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Signup from "../../Pages/Signup/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/checkout/:id',
                element: <PrivateRouter><Checkout /></PrivateRouter>,
                loader: ({ params }) => fetch(`https://genius-car-server-md06nzdtc-arnima12.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRouter><Orders /></PrivateRouter>
            }


        ]
    },
]);
export default router;