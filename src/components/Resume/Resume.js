import React, { useState } from 'react';
import Title from '../SharedLayouts/Title';
import ResumeCard from './ResumeCard';
import Education from './Education';
import ProfessionalSkills from './ProfessionalSkills';
import Exprience from './Exprience';
import Achievement from './Achievement';

const Resume = () => {

    const [education, setEducation] = useState(true);
    const [skill, setSkill] = useState(false);
    const [exprience, setExprience] = useState(false);
    const [achievement, setAchivement] = useState(false);

    return (
        <section id='resume' className='w-full  py-20 flex flex-col border-b-[1px] border-b-black'>
            <div className="text-center">
                <Title title="1+ Years of exprience"
                    des={"My Resume"}></Title>
            </div>

            <div>
                <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                    <li
                        onClick={() =>
                            setEducation(true) &
                            setSkill(false) &
                            setExprience(false) &
                            setAchivement(false)}
                        className={`${education ? "border-designColor rounded-lg" : "border-transparent"} resume-link-style`}>
                        Education
                    </li>

                    <li onClick={() =>
                        setEducation(false) &
                        setSkill(true) &
                        setExprience(false) &
                        setAchivement(false)}
                        className={`${skill ? "border-designColor rounded-lg" : "border-transparent"} resume-link-style`}>
                        Professional Skills
                    </li>
                    <li onClick={() =>
                        setEducation(false) &
                        setSkill(false) &
                        setExprience(true) &
                        setAchivement(false)}
                        className={`${exprience ? "border-designColor rounded-lg" : "border-transparent"} resume-link-style`}>
                        Exprience
                    </li>
                    <li onClick={() =>
                        setEducation(false) &
                        setSkill(false) &
                        setExprience(false) &
                        setAchivement(true)}
                        className={`${achievement ? "border-designColor rounded-lg" : "border-transparent"} resume-link-style`}>
                        Achivements
                    </li>
                </ul>
            </div>

            {
                education && <Education />
            }

            {
                skill && <ProfessionalSkills />
            }

            {
                exprience && <Exprience />
            }
            {
                achievement && <Achievement />
            }



        </section >
    );
};

export default Resume;