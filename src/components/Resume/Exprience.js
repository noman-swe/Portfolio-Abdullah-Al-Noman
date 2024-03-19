import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';
import TitleResume from './TitleResume';

const Exprience = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: .5 } }}
         className=' font-titleFont flex gap-20'>
            <div className='w-full flex gap-20'>

                <div className="left">
                    <div>
                        <TitleResume title='Soft Exprience Skill' subTitle={'1900 - 2000'} />
                    </div>

                    <div className='resume-card-section'>
                        <ResumeCard
                            subTitle='BSc in Software Enginering'
                            title="Daffodill International University"
                            result="3.00/4"
                            des="Trainging Priovded by the univercities in order to prepare people to work various sectors of the econmy or areas of culture."
                        />
                        <ResumeCard
                            subTitle='HSC Education'
                            title="Mahmudul Hasan College(13/14)"
                            result="4.00/5"
                            des="Heigher education is tertiary eduction deading to award of and academic degree. Heigher education is also called post-secendary education"
                        />
                        <ResumeCard
                            title="Secondary School Education"
                            subTitle='Police Lines High School, Tangail.'
                            result="4.75/5"
                            des="Secondary education is post-primmary eduction covers two phases pm the international standard class fication of education scale"
                        />
                    </div>
                </div>

                {/* righ-side */}
                <div className="right">
                    <div>
                        <TitleResume title='Hard Exprience Skill' subTitle={'Features'} />
                    </div>

                    <div className='resume-card-section'>
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

            </div>
        </motion.div>
    );
};

export default Exprience;