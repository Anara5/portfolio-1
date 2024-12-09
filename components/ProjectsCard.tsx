import React from 'react';
import { urlFor } from '../sanity';
import { Project } from '../typings';
import Image from 'next/image';

type Props = {
    project: Project;
}

const ProjectsCard = ({ project }: Props) => {
    return (
      <div className="w-screen flex-shrink-0 snap-center flex flex-col 
      space-y-5 items-center justify-center px-10 pt-10 md:px-20 md:pt-20 h-screen overflow-y-auto">
  
          {/* Project Image */}
          <Image 
              src={urlFor(project.image).url()} 
              alt={project.title} 
              height={180} 
              width={300}
              className="w-[300px] object-cover"
          />
  
          {/* Project Title */}
          <h3 className="font-semibold lg:text-4xl text-2xl">{project?.title}</h3>
  
          {/* Project Summary */}
          <p className="text-sm md:text-base text-center">
              {project?.summary}
          </p>
  
          {/* Technologies Used */}
          <div className="flex items-center justify-center flex-wrap gap-2">
              {project?.technologies.map((technology) => (
                  <Image 
                      key={technology._id}
                      src={urlFor(technology.image).url()} 
                      alt={technology.title} 
                      height={30} 
                      width={30} 
                      className="p-1"
                  />
              ))}
          </div>
  
          {/* Links to GitHub and Live */}
          <div className="flex gap-4">
              {project.linkToGitHub && (
                  <a 
                      className="projectButton cursor-pointer" 
                      href={project.linkToGitHub}
                  >
                      GitHub
                  </a>
              )}
              {project.linkToLive && (
                  <a 
                      className="projectButton cursor-pointer" 
                      href={project.linkToLive}
                  >
                      Live
                  </a>
              )}
          </div>
      </div>
    );
  };
  

export default ProjectsCard;
