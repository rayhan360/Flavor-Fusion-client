import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useContext, useState } from "react";
import logo from '../assets/logo.png'
import './Navbar.css'
import { AuthContext } from "../Providers/AuthProviders";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)


    return (
        <div className="bg-[#262626]">
            <div className="flex justify-between py-6 items-center max-w-7xl mx-auto">
                <div className="flex items-center font-bold text-lg">
                    <img className="w-20" src={logo} alt="logo of the website" />
                    <h1 className="text-white">Flavor <span className="text-[#FF9D2D]">Fusion</span></h1>
                </div>
                <div className="">
                    <div className="lg:hidden text-2xl mr-8 mt-5 text-white" onClick={() => setOpen(!open)}>
                        {
                            open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                        }
                    </div>
                    <nav className={`absolute bg-white z-50 lg:bg-transparent lg:block lg:static px-5 ${open ? 'right-1' : '-right-72'} ${open ? 'block' : 'hidden'}`}>
                        <div className="flex flex-col md:flex-row gap-5 items-center">
                            <ul className={`flex flex-col md:flex-row gap-5 lg:text-white`}>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/addProducts">AddProduct</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/myCart">MyCart</NavLink>
                                </li>
                            </ul>

                            <div>
                                {
                                    user ?
                                        <div className=" flex items-center gap-3">
                                            <div className="dropdown dropdown-end">
                                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                    <div className="w-10 rounded-full">
                                                        <img src={user.photoURL} alt={user.displayName} />
                                                    </div>
                                                </label>
                                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-96">
                                                    <li>
                                                        <button className="text-black text-base"><span className="font-medium">Name:</span> {user.displayName}</button>
                                                    </li>
                                                    <li><button className="text-black text-base"><span className="font-medium">Email:</span> {user.email ? user.email : "email not found"}</button></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <button onClick={logOut} className="bg-indigo-600 text-white px-5 py-2 rounded-md"
                                                >Sign Out</button>
                                            </div>
                                        </div>
                                        :
                                        <div className="mb-5 md:mb-0">
                                            <Link to="/login">
                                                <button
                                                    className="bg-indigo-600 text-white px-5 py-2 rounded-md"
                                                    type="button"
                                                    data-ripple-light="true"
                                                >
                                                    Sign In
                                                </button>
                                            </Link>
                                            <Link to="/registration">
                                                <button
                                                    className="bg-indigo-600 text-white px-5 py-2 rounded-md ml-3"
                                                    type="button"
                                                    data-ripple-light="true"
                                                >
                                                    Sign Up
                                                </button>
                                            </Link>
                                        </div>
                                }
                            </div>
                        </div>

                    </nav>
                </div>

            </div>
        </div>
    );
};

export default Navbar;