import React from 'react';
import { logo } from '../../assets/assetsIndex';
import { navLinksdata } from '../../constants/navLinksData';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="w-full h-24 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-700 sticky top-0 z-50 bg-bodyColor">
            <div className='flex items-center'>
                {/* <span className='pt-5 '>Noman's</span> */}
                <img src={logo} className='w-48' alt="" />
            </div>

            <ul className='flex items-center gap-10'>
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
        </div>
    );
};

export default Navbar;