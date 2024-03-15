import React from 'react';
import { logo } from '../../assets/assetsIndex';
import { navLinksdata } from '../../constants/navLinksData';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="w-full h-20 mx-auto flex justify-between items-center font-titleFont">
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
                                duration={500}
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