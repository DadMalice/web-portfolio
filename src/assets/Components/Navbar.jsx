import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import BVLogoWhite from "../Files/BVLogoWhite.png";
import DarkModeToggle from './DarkModeToggle';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const content = (
        <div className="my-navmobilemenu lg:hidden block absolute z-51 top-16 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-10">
                <li className="m-4">
                    <NavLink
                        exact
                        to="/"
                        className="m-4 p-4 border-b border-white hover:bg-slate-700 hover: rounded"
                        onClick={handleClick}
                    >
                        Home
                    </NavLink>
                </li>
                <li className="m-8 pt-2">
                    <NavLink
                        to="/about"
                        className="m-4 p-4 border-b border-white hover:bg-slate-700 hover: rounded"
                        onClick={handleClick}
                    >
                        About
                    </NavLink>
                </li>
                <li className="m-8 pt-2">
                    <NavLink
                        to="/internship"
                        className="m-4 p-4 border-b border-white hover:bg-slate-700 hover: rounded"
                        onClick={handleClick}
                    >
                        Internship
                    </NavLink>
                </li>
                <li className="m-8 pt-2">
                    <NavLink
                        to="/projects"
                        className="m-4 p-4 border-b border-white hover:bg-slate-700 hover: rounded"
                        onClick={handleClick}
                    >
                        Projects
                    </NavLink>
                </li>
                <li className="m-8 pt-2">
                    <NavLink
                        to="/contact"
                        className="m-4 p-4 border-b border-white hover:bg-slate-700 hover: rounded"
                        onClick={handleClick}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    );

    return (
        <nav>
            <div className="my-navmenu bg-slate-800 h-10vh flex justify-between text-white lg:py-5 px-20 py-5">
                <div className="flex items-center flex-1">
                    <img src={BVLogoWhite} alt="BVW Logo" className="h-8" />
                </div>
                <div className="xl:flex lg:flex xl:flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-10 mr-10 text-[20px]">
                            <li>
                                <NavLink
                                    exact
                                    to="/"
                                    className="hover:text-blue-500 transition border-b-2 border-slate-800 hover:border-blue-500 cursor-pointer"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className="hover:text-blue-500 transition border-b-2 border-slate-800 hover:border-blue-500 cursor-pointer"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/internship"
                                    className="hover:text-blue-500 transition border-b-2 border-slate-800 hover:border-blue-50 cursor-pointer"
                                >
                                    Internship
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/projects"
                                    className="hover:text-blue-500 transition border-b-2 border-slate-800 hover:border-blue-500 cursor-pointer"
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className="hover:text-blue-500 transition border-b-2 border-slate-800 hover:border-blue-500 cursor-pointer"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="flex items-center flex-1">
          <DarkModeToggle></DarkModeToggle>
        </div> */}
                <div>{click && content}</div>
                <button className="block lg:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes /> : <HiMenu className="text-2xl" />}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
