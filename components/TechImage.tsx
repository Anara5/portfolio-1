import React from 'react';
import { motion } from 'framer-motion';
import { Tech } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';

type Props = {
    directionLeft?: boolean;
    tech: Tech;
}

const TechImage = ({ directionLeft, tech}: Props) => {
  return (
    <motion.div
        initial={{
            y: directionLeft ? -200 : 200,
            opacity: 0
        }}
        transition={{
            duration: 1
        }}
        whileInView={{
            opacity: 1,
            y: 0
        }}
        className="group relative flex p-3">

        <div className="relative mb-3 flex flex-col">
            <Image width={50} height={50} alt={tech.title} src={urlFor(tech.image).url()} />
        </div>
        
        <div className="absolute left-0 bottom-0 w-[100%] flex flex-col items-center justify-center">
            <p>{tech.title}</p>
        </div>
    </motion.div>
  )
}

export default TechImage;