import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../HomePage/Home";
import AddProduct from "../AddProduct/AddProduct";
import BrandProducts from "../BrandProducts/BrandProducts";
import BrandProductsDetials from "../BrandProducts/BrandProductsDetials";
import MyCart from "../MyCart/MyCart";
import UpdateProducts from "../UpdateProducts/UpdateProducts";
import Registration from "../Authentication/Registration";
import Login from "../Authentication/Login";
import PrivateRouter from "./PrivateRouter";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/brandProducts/:id',
                element: <BrandProducts></BrandProducts>,
                loader: () => fetch('/brand.json')
            },
            {
                path: '/addProducts',
                element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
            },
            {
                path: '/myCart',
                element: <PrivateRouter><MyCart></MyCart></PrivateRouter>,
                loader: () => fetch('https://flavor-fusion-server-chi.vercel.app/cart')
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRouter><BrandProductsDetials></BrandProductsDetials></PrivateRouter>,
                loader: () => fetch('https://flavor-fusion-server-chi.vercel.app/product')
            },
            {
                path: '/updateProducts/:id',
                element: <PrivateRouter><UpdateProducts></UpdateProducts></PrivateRouter>,
                loader: ({ params }) => fetch(`https://flavor-fusion-server-chi.vercel.app/product/${params.id}`)
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
])


export default Router;