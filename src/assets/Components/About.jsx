import React from 'react';

function About() {
    return (
        <div className='flex items-center justify-center bg-slate-700 min-h-screen'>
            <div style={{ height: '100vh' }} className="flex flex-col justify-center bg-slate-700 lg:my-1 my-10 lg:pt-4 pb-10 lg:pb-10 lg:px-36 xl:w-5/6 w-full min-h-screen">
                <div className='mx-10 mt-20 py-10'>
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
                <div className="flex flex-col xl:flex-row gap-4 justify-center">
                    <div className="flex-shrink-0 flex flex-col items-center justify-center mx-4 my-4">
                        <img
                            src='https://scontent.fmnl4-4.fna.fbcdn.net/v/t31.18172-8/28235066_183861925553643_4615659128601613254_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeFsBCFMpkqS84kai3ubHed7YHk0t6f66BRgeTS3p_roFKK2i2A9QBZky0haslGUvuJGFSOdvntsl4HTwjI1HpwT&_nc_ohc=UNxcRspiCsAAX8H8_v8&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfBwIoz9bQZgm-mjh2ERUvzbHR4twnFH6r3TQaRteHBOpA&oe=65E1493F'
                            alt='Pic'
                            className='h-auto w-[200px] rounded-full shadow-md object-cover m-2'
                        />
                        <h1 className='text-white text-4xl font-bold text-center mt-4 mx-4'>Brent Viñeza</h1>
                        <h1 className='text-white text-lg font-normal text-center mx-4'>4th Year BSIT Student</h1>
                        <h1 className='text-white text-lg font-normal text-center mx-4'>Full Stack Developer</h1>
                    </div>
                    <div className="flex-1 mx-4 my-4 text-white lg:text-lg">
                        <p className='m-5'>
                            A 4th year BSIT Graduating Student from Southville International School and Colleges. Currently, resides in Las Piñas, NCR Philippines.
                        </p>
                        <p className='m-5'>
                            During my second year in college where I was introduced to C# Programming Language, from there I decided that I want to be a software developer.
                        </p>
                        <p className='m-5'>
                            I am also open to take on being a mobile developer as I encountered Java, Kotlin, ReactNative during my college. Outside programming, I enjoy building and tinkering with tech. I built and troubleshooted dozens of computers/laptops.
                        </p>
                        <a className='m-5' href='/Files/BrentViñezaCV.pdf' target='_blank' rel='noreferrer'>
                            <span>Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
