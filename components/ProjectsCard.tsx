import React from 'react';
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
    project: Project;
}

const ProjectsCard = ({ project }: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col 
    space-y-5 items-center justify-center px-20 pt-10 md:p-44 h-screen">

        <img src={urlFor(project.image).url()} alt={project.title}
        className="w-[300px]" />

        <h3 className="font-semibold lg:text-4xl text-3xl">{project?.title}</h3>
        <p>{project?.summary}</p>
        <div className="w-10 group relative flex items-center justify-center">
            {
                project?.technologies.map(technology => (
                    <img className="p-1"
                    key={technology._id}
                    src={urlFor(technology.image).url()} alt={technology.title} />
                ))
            }
        </div>
        <div>
            {project.linkToGitHub && (
                <a className="projectButton cursor-pointer" href={project.linkToGitHub}>
                    <span>GitHub</span>
                </a>
            )}
            {project.linkToLive && (
                <a className="projectButton cursor-pointer" href={project.linkToLive}>
                    <span>Live</span>
                </a>
            )}
        </div>
    </div>
  )
}

export default ProjectsCard;
