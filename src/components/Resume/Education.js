import React from 'react';
import ResumeCard from './ResumeCard';
import TitleResume from './TitleResume';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5 } }} className=' w-full flex flex-col lg:flex-row gap-10 lg:gap-20'>

            <div className="left-education">
                <div>
                    <TitleResume title='Educational Background' subTitle={'Features'} />
                </div>

                <div className='resume-card-section mt-6 lg:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="Daffodill International University"
                        subTitle='BSc in Software Enginering'
                        result="2016-21"
                        des="Trainging Priovded by the univercities in order to prepare people to work various sectors of the econmy or areas of culture."
                    />
                    <ResumeCard
                        subTitle='Higher Secondary Education.'
                        title="Mahmudul Hasan College(13/14)"
                        result="2013-14"
                        des="Heigher education is tertiary eduction deading to award of and academic degree. Heigher education is also called post-secendary education"
                    />
                    <ResumeCard
                        title="Police Lines High School, Tangail."
                        subTitle='Secondary School Education.'
                        result="2008-12"
                        des="Secondary education is post-primmary eduction covers two phases pm the international standard class fication of education scale"
                    />
                </div>
            </div>

            {/* righ-side */}
            <div className="right-education">
                <div>
                    <TitleResume title='Trainee Certifications' subTitle={'Features'} />
                </div>

                <div className='resume-card-section py-6 lg:py-12 font-titleFont flex flex-col gap-4'>
                    <ResumeCard
                        title="Grap View"
                        subTitle='BSc in Software Enginering'
                        result="Malaysia"
                        des="Malaysia Trainging Priovded by the univercities in order to prepare people to work various sectors of the econmy or areas of culture."
                    />
                    <ResumeCard
                        title="Web Developer & Trainer"
                        subTitle='niteke (6544- 5465)'
                        result="Oman"
                        des="Oman Heigher education is tertiary eduction deading to award of and academic degree. Heigher education is also called post-secendary education"
                    />
                    <ResumeCard
                        title="Font-end Developer"
                        subTitle='Police Lines High School, Tangail.'
                        result="Spain"
                        des="Secondary education is post-primmary eduction covers two phases pm the international standard class fication of education scale"
                    />
                </div>
            </div>

        </motion.div>
    );
};

export default Education;