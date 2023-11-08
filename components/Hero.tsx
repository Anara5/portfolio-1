import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { PageInfo } from '../typings';
import Circles from './Circles';

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, my name is ${pageInfo.name}`, 
            "Girl-who-loves-the-world", 
            "<ButAlsoLovesToCode />"
        ],
        loop: true,
        delaySpeed: 2000
    });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center p-5">
        
        <Circles pageInfo={pageInfo}/>

        <div>
            <h1 className="text-[#fed700] text-3xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#fed700" />
            </h1>
        </div>
        <div className="pt-5">
            <Link href="#about">
                <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
                <button className="heroButton">Experience</button>
            </Link>
            <Link href="#techs">
                <button className="heroButton">Techs</button>
            </Link>
            <Link href="#projects">
                <button className="heroButton">Projects</button>
            </Link>
        </div>
    </div>
  )
}