import React, { useEffect, useState } from 'react';
import Title from '../SharedLayouts/Title';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    return (
        <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className="flex justify-center items-center text-center">
                <Title title="Visit My Portfolio And Keep Your Feedback"
                    des={"My Projects"}></Title>
            </div>

            <div className="grid grid-cols-3 gap-14">
                {
                    projects.map(project =>
                        <ProjectCard
                            project={project}
                            key={project.id}
                        >

                        </ProjectCard>)
                }
                
            </div>
        </section>
    );
};

export default Projects;