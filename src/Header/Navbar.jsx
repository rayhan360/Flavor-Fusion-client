import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";
import logo from '../assets/logo.png'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="bg-[#262626]">
            <div className="flex justify-between py-6 items-center max-w-7xl mx-auto">
                <div className="flex items-center font-bold text-lg">
                    <img className="w-20" src={logo} alt="logo of the website" />
                    <h1 className="text-white">Flavor <span className="text-[#FF9D2D]">Fusion</span></h1>
                </div>
                <div className="">
                    <div className="md:hidden text-2xl mr-8 mt-5 text-white" onClick={() => setOpen(!open)}>
                        {
                            open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                        }
                    </div>
                    <nav className={`absolute bg-white z-50 lg:bg-transparent md:block md:static px-5 ${open ? 'right-1' : '-right-72'} ${open ? 'block' : 'hidden'}`}>
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
                                    <NavLink to="/ourFestival">MyCart</NavLink>
                                </li>
                            </ul>
                            <div>
                                {
                                    <div className=" flex items-center">
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">

                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-96">
                                                <li>
                                                    <button className="text-black text-base"><span className="font-medium">Name:</span> </button>
                                                </li>
                                                <li><button className="text-black text-base"><span className="font-medium">Email:</span></button></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <button className="p-3 rounded-md bg-[#ff9d2d] text-white"
                                            >Sign Out</button>
                                        </div>
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