import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const ProjectCard = ({ project }) => {
    const { title, img, des } = project;
    return (
        <div className='w-full h-auto px-12 py-10 rounded-lg shadow-shadowOne flex flex-col
         bg-gradient-to-r from-bodyColor to-[#202327]  hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 group'>

            <div className=' w-full h-[80%] overflow-hidden rounded-lg'>
                <img
                    src={img} alt=""
                    className='w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer' />
            </div>

            {/* project details */}
            <div className="project-info w-full mt-5 flex flex-col gap-6">
                <div>
                    <div className='flex items-center justify-between'>
                        <h3 className="text-center text-base text-designColor font-normal uppercase">{title}</h3>
                        <div className="icons flex gap-2 flex-col">
                            <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'>
                                <BsGithub />
                            </span>
                            <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'>
                                <FaGlobe />
                            </span>
                        </div>
                    </div>

                    <p className='text-sm tracking-wide mt-3 hover:text-gray-100 duration-300'>{des}</p>

                </div>
            </div>
        </div>
    );
};

export default ProjectCard;