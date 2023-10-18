import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../HomePage/Home";
import AddProduct from "../AddProduct/AddProduct";
import BrandProducts from "../BrandProducts/BrandProducts";


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
            }
        ]
    }
])


export default Router;