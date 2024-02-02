import React, { useRef, useState } from 'react';
import { motion } from "framer-motion"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './stylesswipe.css';
import { Pagination } from 'swiper/modules';

import coc1 from '../Files/COC1.png';
import coc2 from '../Files/COC2.png';
import me1 from '../Files/me1.jpg';
import me2 from '../Files/me2.jpg';
import me3 from '../Files/me3.jpg';
import me4 from '../Files/me4.jpg';
import jobs180 from '../Files/jobs180brent.png';
import resume from '../Files/Brent Resume 2024.pdf';
import dtr from '../Files/DailyDiary OJT_TimeFrame.pdf';
import avt from '../Files/avtelcomscreen.png';
import part from '../Files/partnerscreen.png';

function Internship() {

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

    const CustomDiaryLink = ({ children }) => {
        return (
            <a
                href={dtr}
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
                <div className='mx-10 mt-5 xl:mt-48 py-4'>
                    <h1 className='text-white lg:text-6xl xl:text-left text-4xl font-bold text-center'>
                        On-the-Job Training - Practicum Report
                    </h1>
                    <hr
                        style={{
                            borderColor: 'gray',
                            borderWidth: '1px',
                        }}
                        className='mt-4'
                    />
                </div>
                <div className="flex gap-1 justify-center">
                    <h2 className='text-white md:text-4xl text-xl font-bold text-left mx-5'>
                        Project-Based Internship (Total of 480 hours)
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <h2 className='text-white md:text-4xl text-xl font-bold text-left mx-10 mt-8'>
                        I. Introduction
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        a. Rationale
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <p className='text-white lg:text-lg font-normal text-justify mx-10 mt-4 pl-10'>
                        I opted for Project-Based Internships due to surpise of opportunities, coupled with the advantage of remote work. This decision not only aligns with my goal of gaining practical experience but also caters to the challenges of my current situation as a parent. The flexibility of remote work is particularly beneficial for me, allowing me to balance professional growth with my responsibilities as a parent to my daughter.
                        But I tried to do the conventional work setup, got numerous interviews and two job offers that are both on-site setup, but the advantage of remote work is a no-brainer for me.
                    </p>
                </div>
                <div className="flex gap-1 justify-left mt-4">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        b. Work/Training/Project Expectations
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <p className='text-white lg:text-lg font-normal text-justify mx-10 mt-4 pl-10'>
                        Entering this internship, my expectations were centered around immersing myself in web development, gaining hands-on experience in coding, testing, and deploying websites. I aimed to accumulate 480 hours of practical experience across two projects, progressing in complexity.
                    </p>
                </div>

                <div className="flex gap-1 justify-left">
                    <h2 className='text-white md:text-4xl text-xl font-bold text-left mx-10 mt-8'>
                        II. Training / Project Profile
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        a. Training/Project Description
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <p className='text-white lg:text-lg font-normal text-justify mx-10 mt-4 pl-10'>
                        The first project involved a one-month commitment focused on creating and deploying a functional website. Subsequently, the second project extended over two months, replicating the workload of the first but introducing more advanced challenges. Both projects, which revolved around web development, offered me a comprehensive learning experience.
                    </p>
                </div>
                <div className="flex gap-1 justify-left mt-4">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        b. Nature of Training/Project
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <p className='text-white lg:text-lg font-normal text-justify mx-10 mt-4 pl-10'>
                        The nature of the training/projects encompassed the end-to-end process of web development, from conceptualizing to deploying websites. These projects provided exposure to various frameworks and tools, contributing to a well-rounded skill set.
                    </p>
                </div>
                <div className="flex gap-1 justify-left mt-4">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        c. Training/Project Milestones
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <p className='text-white lg:text-lg font-normal text-justify mx-10 mt-4 pl-10'>
                        Milestones were crucial in guiding the progress of each project, from designing wireframes to deploying the final product. They ensured a structured and goal-oriented approach throughout my internship.
                    </p>
                </div>

                <div className="flex gap-1 justify-left">
                    <h2 className='text-white md:text-4xl text-xl font-bold text-left mx-10 mt-8'>
                        III. Observations
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        a. Organization’s / Training’s / Project’s Competitive Advantages
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <p className='text-white lg:text-lg font-normal text-justify mx-10 mt-4 pl-10'>
                        Both organizations showcased a commitment to staying at the forefront of technology, providing exposure to different industries and their unique challenges. This diversity broadened my understanding of practical applications and industry demands.
                    </p>
                </div>
                <div className="flex gap-1 justify-left mt-4">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        b. Overall Observation
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <p className='text-white lg:text-lg font-normal text-justify mx-10 mt-4 pl-10'>
                        My overall observation highlighted the effectiveness of project-based internships in providing a holistic learning experience. It emphasized the importance of adaptability, effective teamwork, and clear communication in successfully executing projects.
                    </p>
                </div>

                <div className="flex gap-1 justify-left">
                    <h2 className='text-white md:text-4xl text-xl font-bold text-left mx-10 mt-8'>
                        IV. Anecdotal Reports
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        a. Daily, Weekly, Monthly Reports
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <p className='text-white lg:text-lg font-normal text-justify mx-10 mt-4 pl-10'>
                        <p className='text-white lg:text-lg font-normal text-justify'>
                            To access the updated report please <CustomDiaryLink><span className='hover:decoration-dashed'>click here</span></CustomDiaryLink>
                        </p>
                    </p>
                </div>
                <div className="flex gap-1 justify-left mt-4">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        b. Job Description / Task Assignments
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <p className='text-white lg:text-lg font-normal text-justify mx-10 mt-4 pl-10'>
                        The projects included a wide range of tasks, from coding and debugging to client communication and project management. Task assignments were designed to offer a comprehensive view of web development, providing insights into various aspects of the field.
                    </p>
                </div>
                <div className="flex gap-1 justify-left mt-4">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        c. Problems Encountered
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <p className='text-white lg:text-lg font-normal text-justify mx-10 mt-4 pl-10'>
                        Challenges I encountered during the internship varied from technical glitches to communication hurdles with clients. Overcoming these challenges became an integral part of my learning process, enhancing my problem-solving skills and resilience in a real-world setting.
                    </p>
                </div>
                <div className="flex gap-1 justify-left mt-4">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        d. Salient Practices
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <p className='text-white lg:text-lg font-normal text-justify mx-10 mt-4 pl-10'>
                        Adherence to coding standards, effective version control, collaborative coding, and the incorporation of agile project management methodologies were among the salient practices. These not only streamlined the development process but also instilled habits essential for my growth as a professional web developer.
                    </p>
                </div>
                <div className="flex gap-1 justify-left mt-4">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        e. Relevance to the Chosen Training
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <p className='text-white lg:text-lg font-normal text-justify mx-10 mt-4 pl-10'>
                        The experiences gained during the internship directly aligned with my chosen training, reinforcing theoretical concepts through practical application. The relevance of the projects to my training objectives ensured a seamless integration of learning and practical experience.
                    </p>
                </div>
                <div className="flex gap-1 justify-left mt-4">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        f. Summary of Gained Experience
                    </h2>
                </div>
                <div className="flex gap-1 justify-left">
                    <p className='text-white lg:text-lg font-normal text-justify mx-10 mt-4 pl-10'>
                        In summary, the internship provided me with a diverse range of experiences, from foundational website development to handling complex project requirements. This journey significantly enhanced my technical proficiency, communication skills, and adaptability, laying a robust foundation for my future endeavors in the dynamic field of web development.
                    </p>
                </div>

                <div className="flex gap-1 justify-left">
                    <h2 className='text-white md:text-4xl text-xl font-bold text-left mx-10 mt-8'>
                        V. Appendices
                    </h2>
                </div>
                <div className="flex gap-1 justify-left mt-4 mb-4">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        a. Certificate of Completion
                    </h2>
                </div>
                <div className="flex gap-1 justify-center">
                    <img
                        src={coc1}
                        alt='Certificate of Completion-Partners'
                        className='h-auto w-3/4 shadow-md object-cover m-2'
                    />
                </div>
                <div className="flex gap-1 justify-center">
                    <img
                        src={coc2}
                        alt='Certificate of Completion-AVTELCOM'
                        className='h-auto w-3/4 shadow-md object-cover m-2'
                    />
                </div>
                <div className="flex gap-1 justify-left mt-4">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        b. Images During Practicum
                    </h2>
                </div>
                <div className="flex gap-1 justify-center xl:px-60 xl:mx-20 lg:px-40 lg:mx-15 md:px-30 md:mx-10 p-10">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper border-transparent rounded-lg shadow-xl"
                    >
                        <SwiperSlide><img
                            src={me1}
                            alt='BrentPic1'
                            className='h-auto w-auto shadow-md object-cover'
                        /></SwiperSlide>
                        <SwiperSlide><img
                            src={me2}
                            alt='BrentPic1'
                            className='h-auto w-auto shadow-md object-cover'
                        /></SwiperSlide>
                        <SwiperSlide><img
                            src={me3}
                            alt='BrentPic1'
                            className='h-auto w-auto shadow-md object-cover'
                        /></SwiperSlide>
                        <SwiperSlide><img
                            src={me4}
                            alt='BrentPic1'
                            className='h-auto w-auto shadow-md object-cover'
                        /></SwiperSlide>
                    </Swiper>
                </div>
                <div className="flex justify-left mt-4">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        c. Updated Resume
                    </h2>
                </div>
                <div className="flex gap-1 justify-left mt-4 px-10">
                    <p className='xl:ml-20 xl:pl-10 pl-12 text-white lg:text-lg font-normal text-justify'>
                        To access the updated resume <CustomResumeLink><span className='hover:decoration-dashed'>click here</span></CustomResumeLink>
                    </p>
                </div>
                <div className="flex gap-1 justify-left mt-4">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        d. Link and Screenshot of Jobs180.com Profile
                    </h2>
                </div>
                <div className="flex gap-1 justify-center items-center pl-20 mt-5">
                    <a className='items-center justify-center' href="https://brentvineza.jobs180.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            src={jobs180}
                            alt='Certificate of Completion-Partners'
                            className='h-auto w-3/4 shadow-md object-cover m-2'
                        />
                    </a>
                </div>
                <div className="flex gap-1 justify-left mt-4">
                    <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-10 mt-4 pl-10'>
                        e. Showcase of Completed Projects
                    </h2>
                </div>
                <div className="flex gap-1 m-5 justify-center">
                    <div className='flex'>
                        <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-5 mt-5'>
                            First Client - <a href="https://www.partnershospicequalitycarellc.com/" target="_blank" rel="noopener noreferrer" className="text-slate-300 underline">Partner's Hospice Quality Care LLC</a>
                        </h2>
                    </div>
                </div>
                <div className="flex gap-1 justify-center px-10 ">
                    <img
                        src={part}
                        alt='Website-Screenshot-Partners'
                        className='h-auto w-50% shadow-md object-cover m-2 border-4 border-white rounded-md'
                    />
                </div>
                <div className="flex gap-1 m-5 justify-center">
                    <div className='flex'>
                        <h2 className='text-white md:text-2xl text-xl font-semibold text-left mx-5 mt-5'>
                            Second Client - <a href="https://www.avtelcom.com/" target="_blank" rel="noopener noreferrer" className="text-slate-300 underline">AVTELCOM LLC</a>
                        </h2>
                    </div>
                </div>
                <div className="flex gap-1 justify-center px-10 ">
                    <img
                        src={avt}
                        alt='Website-Screenshot-AVTELCOM'
                        className='h-auto w-50% shadow-md object-cover m-2 border-4 border-white rounded-md'
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default Internship