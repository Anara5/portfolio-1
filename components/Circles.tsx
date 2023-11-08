import React from 'react';
import { motion } from "framer-motion";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

function Circles({ pageInfo }: Props) {
  return (
    <div className="relative flex justify-center items-center">
        <motion.div 
            initial={{
                opacity: 0
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            }}
            transition={{
                duration: 2.5,
            }}
            >
            <div className="
                absolute left-0 top-0
                border border-[#0006ff] 
                rounded-full 
                bg-[#0006ff]
                h-[200px] w-[200px]
                animate-pulse
                "/>
            <div className="
                relative
                border border-[#fed700] 
                bg-[#fed700]
                rounded-full 
                h-[250px] w-[250px]
                animate-pulse
                mx-[-200px]
                my-[30px]
                "/>
        </motion.div>
        <div className="absolute h-[150px] w-[150px] mx-auto object-cover">
            <img src={urlFor(pageInfo?.heroImage).url()} />
        </div>
    </div>
  )
}

export default Circles;