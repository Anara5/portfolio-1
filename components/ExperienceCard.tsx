import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#252438] p-10 
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity overflow-hidden">
        <motion.img 
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            viewport={{
                once: true
            }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
            object-cover object-center"
            src={urlFor(experience?.companyImage).url()}
            alt={experience.company}
        />

        <div className="px-0 md:px-10">
            <h4 className="text-3xl font-light">{experience.jobTitle}</h4>
            <p className="text-2xl font-semibold mt-1">{experience.company}</p>
            
            <p className="uppercase py-5 text-gray-300">
                {new Date(experience.dateStarted).toDateString()} - {" "}
                {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
            </p>

            <ul className="list-disc space-y-4 ml-5 text-md">
                {
                    experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))
                }
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard;
