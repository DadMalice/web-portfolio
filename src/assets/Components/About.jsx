import React from 'react';
import { motion } from "framer-motion"

import resume from '../Files/Brent Resume 2024.pdf';

function About() {

    const CustomResumeLink = ({ children }) => {
        return (
            <a
                href={resume}
                className="text-slate-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    };

    return (
        <div className='flex items-center justify-center bg-slate-700 min-h-screen xl:py-0 md:py-0 sm:py-1 py-2'>
            <motion.div className="flex flex-col justify-center bg-slate-700 lg:my-1 my-10 lg:pt-4 pb-2 lg:pb-10 xl:px-20 lg:px-10 xl:w-[70%] w-full min-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                exit={{ opacity: 0 }}
            >
                <div className='mx-10 mt-5 py-4'>
                    <h1 className='text-white lg:text-6xl xl:text-left text-4xl font-bold text-center'>
                        About Me
                    </h1>
                    <hr
                        style={{
                            borderColor: 'gray',
                            borderWidth: '1px',
                        }}
                        className='mt-4'
                    />
                </div>
                <div className="flex flex-col xl:flex-row gap-1 justify-center">
                    <div className="flex-shrink-0 flex flex-col items-center justify-center mx-4">
                        <img
                            src='https://photos.smugmug.com/FKW-WEBSITE/FOR-FOTOKRAFTWERKS-WEBSITE/EMPLOYEE-IMAGES/i-9d8VSDV/0/92a33a46/S/sir%20brent-S.jpg'
                            alt='Pic'
                            className='h-auto w-[200px] rounded-full shadow-md object-cover m-2'
                        />
                        <h1 className='text-white text-4xl font-bold text-center mt-4 mx-4'>Brent Viñeza</h1>
                        <h1 className='text-white text-lg font-normal text-center mx-4'>4th Year BSIT Student</h1>
                        <h1 className='text-white text-lg font-normal text-center mx-4'>Software Developer</h1>
                    </div>
                    <div className="flex-1 mx-4 text-white lg:text-lg">
                        <p className='m-5'>
                            A 4th year BSIT Graduating Student from Southville International School and Colleges. Currently, resides in Las Piñas, NCR Philippines.
                        </p>
                        <p className='m-5'>
                            During my first year in college, I was introduced to the Java Programming Language. Initially, I didn't enjoy it much. However, during my second year, when C# and WPForms alongside MsSQL were introduced, I decided that I wanted to be a software developer.
                        </p>
                        <p className='m-5'>
                            I am open to take on being a web or mobile developer as I encountered various frameworks and tools like React.Js, TailwindCSS during my internship. Outside programming, I enjoy building and tinkering with tech. I built and troubleshooted dozens of computers/laptops.
                        </p>
                        <p className='m-5'>
                            Are you interested? Please check my <CustomResumeLink><span className='hover:decoration-dashed'>resume</span></CustomResumeLink>.
                        </p>
                        <h2 className='text-white md:text-2xl text-xl font-bold text-left m-5 pt-4'>
                            Skills
                        </h2>
                        <div className='flex flex-wrap gap-2 ml-5 xl:pb-10 pb-12'>
                            <div className="bg-blue-600 h-[28px] w-auto px-2 rounded-sm">
                                <p className="text-lg font-semibold text-white text-center">C#</p>
                            </div>
                            <div className="bg-red-700 h-[28px] w-auto px-2 rounded-sm">
                                <p className="text-lg font-semibold text-white text-center">Java</p>
                            </div>
                            <div className="bg-yellow-500 h-[28px] w-auto px-2 rounded-sm">
                                <p className="text-lg font-semibold text-white text-center">JavaScript</p>
                            </div>
                            <div className="bg-sky-800 h-[28px] w-auto px-2 rounded-sm">
                                <p className="text-lg font-semibold text-white text-center">React</p>
                            </div>
                            <div className="bg-blue-400 h-[28px] w-auto px-2 rounded-sm">
                                <p className="text-lg font-semibold text-white text-center">Flutter</p>
                            </div>
                            <div className="bg-purple-700 h-[28px] w-auto px-2 rounded-sm">
                                <p className="text-lg font-semibold text-white text-center">Dart</p>
                            </div>
                            <div className="bg-orange-600 h-[28px] w-auto px-2 rounded-sm">
                                <p className="text-lg font-semibold text-white text-center">HTML</p>
                            </div>
                            <div className="bg-sky-600 h-[28px] w-auto px-2 rounded-sm">
                                <p className="text-lg font-semibold text-white text-center">CSS</p>
                            </div>
                            <div className="bg-red-900 h-[28px] w-auto px-2 rounded-sm">
                                <p className="text-lg font-semibold text-white text-center">MsSQL</p>
                            </div>
                            <div className="bg-green-800 h-[28px] w-auto px-2 rounded-sm">
                                <p className="text-lg font-semibold text-white text-center">Google Cloud</p>
                            </div>
                            <div className="bg-blue-800 h-[28px] w-auto px-2 rounded-sm">
                                <p className="text-lg font-semibold text-white text-center">Azure</p>
                            </div>
                            <div className="bg-amber-600 h-[28px] w-auto px-2 rounded-sm">
                                <p className="text-lg font-semibold text-white text-center">AWS</p>
                            </div>
                            <div className="bg-red-600 h-[28px] w-auto px-2 rounded-sm">
                                <p className="text-lg font-semibold text-white text-center">Computer Hardware</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default About;
