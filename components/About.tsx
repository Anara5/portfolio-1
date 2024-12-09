import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col relative text-center md:text-left max-w-7xl px-10 mx-auto items-center justify-center md:justify-evenly overflow-y-auto"
    >
      {/* Title */}
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 lg:text-2xl">
        About
      </h3>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-evenly w-full mt-20 space-y-5 md:space-y-0 md:space-x-10">
        {/* Image */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex-shrink-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover md:rounded-lg"
        >
          <Image
            className="rounded-lg"
            src={urlFor(pageInfo.profilePic).url()}
            alt="Profile Picture"
            height={400}
            width={550}
          />
        </motion.div>

        {/* Text Content */}
        <div className="space-y-5 px-5 md:px-10">
          <h4 className="lg:text-4xl sm:text-3xl font-semibold">
            A <span className="underline font-thin">little</span> about me
          </h4>
          <p className="lg:text-base text-sm leading-relaxed">
            {pageInfo.aboutInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
