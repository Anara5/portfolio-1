import React from 'react';
import { motion } from "framer-motion";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const elements = [
    { size: 40, position: { top: '22%', left: '42%' }, duration: 3000 },
    { size: 30, position: { top: '25%', left: '80%' }, duration: 5000 },
    { size: 60, position: { top: '27%', left: '6%' }, duration: 3000 },
    { size: 60, position: { top: '30%', left: '60%' }, duration: 6000 },
    { size: 50, position: { top: '60%', left: '5%' }, duration: 3000 },
    { size: 30, position: { top: '60%', left: '90%' }, duration: 4000 },
    { size: 30, position: { top: '42%', left: '25%' }, duration: 3000 },
    { size: 40, position: { top: '80%', left: '25%' }, duration: 5000 },
    { size: 50, position: { top: '85%', left: '74%' }, duration: 4000 },
    { size: 60, position: { top: '90%', left: '40%' }, duration: 6000 },
    { size: 40, position: { top: '90%', left: '80%' }, duration: 5000 },
    { size: 30, position: { top: '70%', left: '70%' }, duration: 3000 },
    { size: 60, position: { top: '80%', left: '30%' }, duration: 6000 },
    { size: 50, position: { top: '50%', left: '24%' }, duration: 3000 },
    { size: 30, position: { top: '10%', left: '50%' }, duration: 4000 },
    { size: 30, position: { top: '90%', left: '12%' }, duration: 3000 },
    { size: 40, position: { top: '90%', left: '22%' }, duration: 5000 },
    { size: 60, position: { top: '45%', left: '70%' }, duration: 8000 },
    { size: 50, position: { top: '66%', left: '29%' }, duration: 3000 },
    { size: 30, position: { top: '40%', left: '92%' }, duration: 4000 },
    { size: 30, position: { top: '33%', left: '50%' }, duration: 3000 },
    { size: 40, position: { top: '77%', left: '30%' }, duration: 5000 },
    { size: 60, position: { top: '5%', left: '5%' }, duration: 6000 },
    { size: 50, position: { top: '10%', left: '48%' }, duration: 7000 },
    { size: 30, position: { top: '80%', left: '16%' }, duration: 4000 },
    { size: 30, position: { top: '90%', left: '90%' }, duration: 3000 },
    { size: 40, position: { top: '18%', left: '90%' }, duration: 5000 },
    { size: 60, position: { top: '20%', left: '86%' }, duration: 6000 },
    { size: 50, position: { top: '42%', left: '93%' }, duration: 9000 },
    { size: 30, position: { top: '88%', left: '17%' }, duration: 4000 },
];

function Circles({ pageInfo }: Props) {

    return (
        <div className="relative flex justify-center w-[100%] h-[60%]">
        
            {elements.map((element, index) => (
                <motion.div
                    key={index}
                    initial={{
                        scale: 0,
                        opacity: 1,
                    }}
                    animate={{
                        opacity: 0,
                        scale: 1.3,
                        transition: {
                            duration: element.duration / 1000,
                            repeat: Infinity,
                        }
                    }}
                    className="absolute rounded-full animate-fade-in-out"
                    style={{
                        ...element.position,
                        background: getRandomColor(),
                        width: `${element.size}px`,
                        height: `${element.size}px`,
                    }}
                    />
                ))}

            <div className="absolute h-[150px] w-[150px] object-cover top-[15rem]">
                <img src={urlFor(pageInfo?.heroImage).url()} />
            </div>
        </div>
    )
}

export default Circles;