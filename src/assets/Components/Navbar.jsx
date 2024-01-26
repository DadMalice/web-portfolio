import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import BVLogoWhite from "../Files/BVLogoWhite.png";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="Home">
                    <li className="my-4 py-4 border-b border-slate-700 hover:bg-slate-700 hover: rounded">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="About">
                    <li className="my-4 py-4 border-b border-slate-700 hover:bg-slate-700 hover: rounded">About</li>
                </Link>
                <Link spy={true} smooth={true} to="Internship">
                    <li className="my-4 py-4 border-b border-slate-700 hover:bg-slate-700 hover: rounded">Internship</li>
                </Link>
                <Link spy={true} smooth={true} to="Projects">
                    <li className="my-4 py-4 border-b border-slate-700 hover:bg-slate-700 hover: rounded">Projects</li>
                </Link>
                <Link spy={true} smooth={true} to="Contact">
                    <li className="my-4 py-4 border-b border-slate-700 hover:bg-slate-700 hover: rounded">Contact</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-40 py-4">
                <div className="flex items-center flex-1">
                    <img src={BVLogoWhite} alt="BVW Logo" className="h-8" />
                </div>
                <div className="xl:flex lg:flex xl:flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-10 mr-10 text-[20px]">
                            <Link spy={true} smooth={true} to="Home">
                                <li className="hover:text-blue-500 transition border-b-2 border-slate-800 hover:border-blue-500 cursor-pointer">Home</li>
                            </Link>
                            <Link spy={true} smooth={true} to="About">
                                <li className="hover:text-blue-500 transition border-b-2 border-slate-800 hover:border-blue-500 cursor-pointer">About</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Internship">
                                <li className="hover:text-blue-500 transition border-b-2 border-slate-800 hover:border-blue-50 cursor-pointer">Internship</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Projects">
                                <li className="hover:text-blue-500 transition border-b-2 border-slate-800 hover:border-blue-500 cursor-pointer">Projects</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Contact">
                                <li className="hover:text-blue-500 transition border-b-2 border-slate-800 hover:border-blue-500 cursor-pointer">Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block lg:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes /> : <HiMenu className="text-2xl" />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar