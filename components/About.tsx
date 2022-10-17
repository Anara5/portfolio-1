import React from 'react'
import { motion } from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
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
        md:flex-row max-w-7xl px-10 pt-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] 
        text-gray-500 lg:text-2xl">About</h3>

        <motion.div
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duraton: 2.5,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        viewport={{
            once: true
        }}
        className="-mb-20 md:mb-0 sm:rounded-full flex-shrink-0 w-44 object-cover
        md:rounded-lg md:w-80 md:h-55 xl:w-[500px] xl:h-[400px]">
            <img className="rounded-lg" src={urlFor(pageInfo.profilePic).url()} alt="" />
        </motion.div>

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="lg:text-4xl sm:text-3xl font-semibold">
                A{" "}<span className="underline font-thin">little</span>{" "} about me
            </h4>
            <p className="lg:text-base px-1">
                {pageInfo.aboutInformation}
            </p>
        </div>
    </motion.div>
  )
}
