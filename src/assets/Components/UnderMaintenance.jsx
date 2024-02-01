import React from 'react'
import maintenance from '../Files/maintenance.png'

function UnderMaintenance() {
    return (
        <div>
            <div style={{ height: '77vh' }} className="flex flex-col justify-center items-center bg-slate-700 p-20">
                <div className="flex justify-center items-center">
                    <img src={maintenance} alt="Under Construction" className="w-1/2" />
                </div>
                <h1 className='text-white text-6xl font-bold text-left mt-8'>
                    Work in Progress
                </h1>
                <div className='p-10 text-center'>
                    <p className='text-white text-lg font-normal mt-10'>This page is still being developed by me.</p>
                    <p className='text-white text-lg font-normal'>Come back and check it out soon.</p>
                </div>
            </div>
        </div>
    )
}

export default UnderMaintenance