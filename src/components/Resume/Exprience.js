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
            <div className='w-full flex flex-col lg:flex-row gap-10 lg:gap-20'>

                <div className="left">
                    <div>
                        <TitleResume title='Job Experience' subTitle={'Features'} />
                    </div>

                    <div className='resume-card-section'>
                        <ResumeCard
                            title="Font-end Developer"
                            subTitle='Grap View - ( Apr-22 to Feb-23 )'
                            result="Ashulia"
                            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
                        />
                        <ResumeCard
                            title="Web Developer & Trainer"
                            subTitle='Local Institute - (Jun-21 to Mar-22)'
                            result="Tangail"
                            des="A locally popular destination with a growing number of skilled young men power, it's true that securing a role as a Trainer isn't too easy."
                        />
                        <ResumeCard
                            title="PSD To HTML Responsive Designer"
                            subTitle='Freelancing - (Feb-20 to Nov-20)'
                            result="Remote"
                            des="I had work on PSD to HTML web design. I love to take challenges. I am using the most advanced CSS methods including Flexbox, Grid, Animation and Frameworks like Bootstrap  Tailwind-css."
                        />
                    </div>
                </div>

                {/* righ-side */}
                <div className="right">
                    <div>
                        <TitleResume title='Trainer Experience' subTitle={'Features'} />
                    </div>

                    <div className='resume-card-section'>
                        <ResumeCard
                            title="W3 School"
                            subTitle='Bla Bla'
                            result="Malaysia"
                            des=" hiring process is an important part of our culture. Developers care deeply about their teams and the people who make them up."
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