import React from 'react'
import { motion } from "framer-motion"
import maintenance from '../Files/maintenance.png'

function UnderMaintenance() {
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
                <div className='mx-10 mt-10 xl:mt-48 py-8'>
                    <div className="flex justify-center items-center">
                        <img src={maintenance} alt="Under Construction" className="w-1/2" />
                    </div>
                    <h1 className='text-white text-6xl font-bold text-center mt-8'>
                        Work in Progress
                    </h1>
                    <div className='p-10 text-center'>
                        <p className='text-white text-lg font-normal mt-10'>This page is still being developed by me.</p>
                        <p className='text-white text-lg font-normal'>Come back and check it out soon.</p>
                    </div>
                </div>
            </motion.div>
        </div >
    )
}

export default UnderMaintenance