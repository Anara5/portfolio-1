import React from 'react';
import { motion } from 'framer-motion';
import TechImage from './TechImage';
import { Tech } from '../typings';

type Props = {
    techs: Tech[];
}

function Techs({ techs }: Props) {
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

        className="h-screen flex flex-col relative text-center md:text-left
        xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center 
        xl:space-y-0 mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] 
        text-gray-500 lg:text-2xl">Techs</h3>

        <div className="grid grid-cols-4 gap-5">
            {
                techs?.map(tech => (
                    <TechImage
                        key={tech._id}
                        tech={tech}
                    />
                ))
            }
        </div>
    </motion.div>
  )
}

export default Techs;
