import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {

    const navigate = useNavigate();

    const handleAboutClick = () => {
        navigate('/about');
    };

    const handleContactClick = () => {
        navigate('/contact');
    };

    const [h1text, setH1Text] = useState('');
    const [h2text, setH2Text] = useState('');

    useEffect(() => {
        const typeH1 = async () => {
            const text = 'Hello, I am Brent';
            for (let i = 0; i <= text.length; i++) {
                setH1Text(text.substring(0, i));
                await new Promise(resolve => setTimeout(resolve, 75));
            }
        };

        const typeH2 = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            const textArray = ['4th Year BSIT Student', 'Full Stack Developer'];
            for (let j = 0; j < textArray.length; j++) {
                const text = textArray[j];
                for (let i = 0; i <= text.length; i++) {
                    setH2Text(text.substring(0, i));
                    await new Promise(resolve => setTimeout(resolve, 75));
                }
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };

        typeH1();
        typeH2();
    }, []);

    // Check if the screen size is "md"
    const isMdScreen = window.matchMedia('(min-width: 720)').matches;
    const containerStyle = {
        height: isMdScreen ? '100vh' : '90vh',
    };



    return (
        <div style={containerStyle} className='bg-slate-700 px-5 flex flex-col justify-center min-h-screen'>
            <div className='flex flex-col items-center '>
                <h1 className='text-white md:text-7xl text-4xl font-bold text-center'>
                    <span className='font-bold'>{h1text}</span>
                </h1>
                <h2 className='text-white md:text-5xl text-xl font-bold text-center mt-3'>
                    <span className='font-bold'>{h2text}</span>
                </h2>
                <p className='text-white text-lg font-normal mt-8 text-center'>Welcome to my Online Portfolio</p>
            </div>
            <div className='flex flex-row pb-5 h-auto text-center items-center justify-center'>
                <button
                    className="mt-4 mx-5 px-5 py-2 rounded-md border border-b-2 text-sm font-semibold uppercase tracking-widest bg-transparent text-white overflow-hidden transition-all duration-200 shadow-none hover:bg-blue-500 hover:shadow-lg"
                    ripple="light"
                    onClick={handleAboutClick}
                >
                    About Me
                </button>
                <p className='text-white text-xl font-normal mt-3'>or</p>
                <button
                    className="mt-4 mx-5 px-5 py-2 rounded-md border border-b-2 text-sm text-center font-semibold uppercase tracking-widest bg-transparent text-white overflow-hidden transition-all duration-200 shadow-none hover:bg-blue-500 hover:shadow-lg "
                    ripple="light"
                    onClick={handleContactClick}
                >
                    Contact Me
                </button>
            </div>
        </div>
    );
}

export default Hero;
