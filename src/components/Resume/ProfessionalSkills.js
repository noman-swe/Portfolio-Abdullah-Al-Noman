import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';
import TitleResume from './TitleResume';

const ProfessionalSkills = () => {
    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: .5 } }}
            className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>

            <div className="w-full lg:w-1/2">
                <div>
                    <TitleResume title='Design Skill' subTitle={'1900 - 2000'} />
                </div>

                <div className="bers">
                    <div className="w-full mt-14 flex flex-col gap-6 ">

                        <div className="skill-set-bar overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Photoshot</p>
                            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className='absolute -top-7 right-0'>
                                        100%
                                    </span>
                                </motion.span>
                            </span>
                        </div>


                        <div className="skill-set-bar overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">FIGMA</p>
                            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className='absolute -top-7 right-0'>
                                        90%
                                    </span>
                                </motion.span>
                            </span>
                        </div>



                        <div className="skill-set-bar overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">ADOBE XD.</p>
                            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className='absolute -top-7 right-0'>
                                        60%
                                    </span>
                                </motion.span>
                            </span>
                        </div>


                        <div className="skill-set-bar overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">ADOBE ILLUSTRATOR</p>
                            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className='absolute -top-7 right-0'>
                                        70%
                                    </span>
                                </motion.span>
                            </span>
                        </div>


                        <div className="skill-set-bar overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">DESIGN</p>
                            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className='absolute -top-7 right-0'>
                                        95%
                                    </span>
                                </motion.span>
                            </span>
                        </div>

                    </div>
                </div>
               
            </div>

            {/* righ-side */}
            <div className="w-full lg:w-1/2">
                <div>
                    <TitleResume title='Development Skill' subTitle={'Features'} />
                </div>

                <div className="bers ">
                    <div className="w-full mt-14 flex flex-col gap-6 ">

                        <div className="skill-set-bar overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Photoshot</p>
                            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className='absolute -top-7 right-0'>
                                        100%
                                    </span>
                                </motion.span>
                            </span>
                        </div>


                        <div className="skill-set-bar overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">FIGMA</p>
                            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className='absolute -top-7 right-0'>
                                        90%
                                    </span>
                                </motion.span>
                            </span>
                        </div>



                        <div className="skill-set-bar overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">ADOBE XD.</p>
                            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className='absolute -top-7 right-0'>
                                        60%
                                    </span>
                                </motion.span>
                            </span>
                        </div>


                        <div className="skill-set-bar overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">ADOBE ILLUSTRATOR</p>
                            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className='absolute -top-7 right-0'>
                                        70%
                                    </span>
                                </motion.span>
                            </span>
                        </div>


                        <div className="skill-set-bar overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">DESIGN</p>
                            <motion.span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className='absolute -top-7 right-0'>
                                        95%
                                    </span>
                                </motion.span>
                            </motion.span>
                        </div>

                    </div>
                </div>


            </div>


        </motion.div>
    );
};

export default ProfessionalSkills;