import React, { useState } from 'react';
import { logo } from '../../assets/assetsIndex';
import { navLinksdata } from '../../constants/navLinksData';
import { Link } from 'react-scroll';

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    const aboutMeDes = 'Hello this is Abdullah Al Noman, I have completed Bachelor of Science in Software Engineering. I am experienced with HTML, CSS, JavaScript and React Js. ';

    return (
        <div className="w-full h-24 sticky top-0 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-700 z-50 ">
            <div className='flex items-center'>
                {/* <span className='pt-5 '>Noman's</span> */}
                <img src={logo} className='w-48' alt="" />
            </div>

            <ul className='hidden md:inline-flex items-center gap-6 lg:gap-10'>
                {
                    navLinksdata.map(({ _id, title, link }) => (
                        <li
                            key={_id}
                            className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'
                        >
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300}
                            >
                                {title}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <span
                onClick={() => setShowMenu(!showMenu)}
                className="text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
            >
                <FiMenu />
            </span>

            {/*  */}
            {showMenu && (
                <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                    <div className="flex flex-col gap-8 py-2 relative">
                        <div>
                            <img className="w-32" src={logo} alt="logo" />
                            <p className="text-sm text-gray-400 mt-2">
                                {aboutMeDes}
                            </p>
                        </div>
                        <ul className="flex flex-col gap-4">
                            {navLinksdata.map((item) => (
                                <li
                                    key={item._id}
                                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                                >
                                    <Link
                                        onClick={() => setShowMenu(false)}
                                        activeClass="active"
                                        to={item.link}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-base uppercase font-titleFont mb-4">
                                Find me in
                            </h2>
                            <div className="flex gap-4">
                                <span className="bannerIcon">
                                    <FaFacebookF />
                                </span>
                                <span className="bannerIcon">
                                    <FaTwitter />
                                </span>
                                <span className="bannerIcon">
                                    <FaLinkedinIn />
                                </span>
                            </div>
                        </div>
                        <span
                            onClick={() => setShowMenu(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                        >
                            <MdClose />
                        </span>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Navbar;