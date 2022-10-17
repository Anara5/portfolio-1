import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
    experiences: Experience[];
    experience: Experience;
}

function ExperienceComp({ experiences }: Props) {
  return (
    <motion.div
        initial={{
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }}
        transition={{
            duration: 1.5
        }}
        className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
        max-w-full px-15 justify-evenly mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] 
        text-gray-500 lg:text-2xl">Experience</h3>

        <div className="w-full flex space-x-5 overflow-x-scroll lg:mt-10 p-10 snap-x snap-mandatory
        scrollbar scrollbar-track-gray-400/10 scrollbar-thumb-[#fed700]/70">
            {
                experiences?.map(experience => (
                    <ExperienceCard 
                        key={experience._id}
                        experience={experience}                        
                    />
                ))
            }
        </div>
    </motion.div>
  )
}

export default ExperienceComp;
