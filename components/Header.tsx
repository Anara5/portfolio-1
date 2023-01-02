import React from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Social } from '../typings';

type Props = {
    socials: Social[];
}

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-30
    xl:items-center">
        <motion.div
        initial={{
            y: -200,
            x: -400,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}
        className="flex flex-row items-center">
            {
                socials.map((social) => (
                    <SocialIcon 
                        key={social._id}
                        url={social.url}
                        fgColor="gray"
                        bgColor="transparent"
                    />
                ))
            }
        </motion.div>
        <Link href="#contact">
            <motion.div
            initial={{
                y: 200,
                x: 400,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                y: 0,
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            className="flex flex-row items-center text-gray-400 cursor-pointer">
                
                <SocialIcon 
                    className="cursor-pointer"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-300">
                    Get in Touch
                </p>
        </motion.div>
        </Link>
    </header>
  )
}