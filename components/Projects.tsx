import React from 'react';
import { Project } from '../typings';
import ProjectsCard from './ProjectsCard';

type Props = {
    projects: Project[];
    project: Project;
}

function Projects({ projects }: Props) {

  return (
    <div className="h-screen flex flex-col relative overflow-hidden text-center 
        md:text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-20 uppercase tracking-[20px] 
        text-gray-500 lg:text-2xl">Projects</h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20 scrollbar scrollbar-track-gray-400/10 scrollbar-thumb-[#fed700]/70">
            {
                projects?.map(project => (
                    <ProjectsCard 
                        key={project._id}
                        project={project}
                    />
                ))
            }
        </div>

        <div className="w-full absolute top-[60%] bg-[#fed700]/10 left-0 h-[500px] skew-y-6" />
    </div>
  )
}

export default Projects;
