import React from 'react'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/email'
import 'react-social-icons/linkedin'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'
import 'react-social-icons/discord'

function Footer() {
    return (
        <footer>
            <div className='my-footer bg-slate-800 w-full text-center'>
                <div className='flex flex-row gap-2 items-center justify-center pt-4 overflow-hidden'>
                    <SocialIcon network="github" url="https://github.com/DadMalice" bgColor="#FF000000" style={{ height: 40, width: 40 }} />
                    <SocialIcon network="linkedin" url="https://www.linkedin.com/in/brentvi%C3%B1eza/" bgColor="#FF000000" style={{ height: 40, width: 40 }} />
                    <SocialIcon network="email" url="mailto:brentvineza@gmail.com" bgColor="#FF000000" style={{ height: 40, width: 40 }} />
                    <SocialIcon network="instagram" url="https://www.instagram.com/brentvineza/" bgColor="#FF000000" style={{ height: 40, width: 40 }} />
                    <SocialIcon network="discord" url="https://www.discordapp.com/users/219789324890144768" bgColor="#FF000000" style={{ height: 40, width: 40 }} />
                </div>
                <p className='text-white font-normal p-5'>© 2024 Brent Viñeza</p>
            </div>
        </footer>
    )
}

export default Footer