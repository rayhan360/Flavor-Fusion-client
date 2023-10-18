import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../HomePage/Home";
import AddProduct from "../AddProduct/AddProduct";
import BrandProducts from "../BrandProducts/BrandProducts";
import BrandProductsDetials from "../BrandProducts/BrandProductsDetials";
import MyCart from "../MyCart/MyCart";


const Router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/brandProducts/:id',
                element: <BrandProducts></BrandProducts>,
                loader: ()=> fetch('/brand.json')
            },
            {
                path: '/addProducts',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>,
                loader: () => fetch('http://localhost:3000/cart')
            },
            {
                path: '/productDetails/:id',
                element: <BrandProductsDetials></BrandProductsDetials>,
                loader: () => fetch('http://localhost:3000/product')
            }
        ]
    }
])


export default Router;