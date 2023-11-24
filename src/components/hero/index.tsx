import Image from 'next/image'
import React from 'react'
import { BiLogoTelegram, BiLogoWhatsapp, BiLogoGithub, BiLogoInstagram, BiLogoFacebook } from 'react-icons/bi'
import ayiin from '@/assets/ayiin.png'
import Link from 'next/link'

const Hero = () => {
    return (
        <div id='home' className='h-screen w-full p-8 sm:px-8 sm:py-36'>
            <div className='
                text-center flex justify-center items-center flex-col 
                sm:text-start sm:flex-row sm:justify-between sm:items-center sm:gap-8
                md:mt-16
                lg:mt-auto
            '>
                <div className='grid sm:gap-1 mt-12'>
                    <h3 className='text-xl sm:text-2xl font-semibold'>Hello</h3>
                    <h1 className='text-2xl  mb-3 sm:mb-0 sm:text-3xl font-bold'>Saya <span className='text-sky-500'>AyiinXd</span></h1>
                    <p className='text-xs sm:text-base font-semibold'>Saya adalah <span className='text-sky-500'>Frontend Developer</span> dan <span className='text-sky-500'>Backend Developer</span>.</p>
                    <p className='text-xs sm:text-base font-semibold'>Bermain di Backend adalah hobi saya dan bermain di Frontend adalah kesenangan saya.</p>
                    <div className='flex gap-2 mt-3 justify-center text-xl sm:justify-start'>
                        <Link href={`https://t.me/AyiinXd`} className='transition-all duration-200 hover:text-sky-500'><BiLogoTelegram /></Link>
                        <Link href={``} className='transition-all duration-200 hover:text-sky-500'><BiLogoWhatsapp /></Link>
                        <Link href={`https://www.facebook.com/AyiinXd`} className='transition-all duration-200 hover:text-sky-500'><BiLogoFacebook /></Link>
                        <Link href={`https://github.com/AyiinXd`} className='transition-all duration-200 hover:text-sky-500'><BiLogoGithub /></Link>
                        <Link href={``} className='transition-all duration-200 hover:text-sky-500'><BiLogoInstagram /></Link>
                    </div>
                </div>
                <div className='mt-12'>
                    <Image
                        src={ayiin}
                        alt='...'
                        width={0}
                        height={0}
                        priority
                        className='
                            rounded-full outline outline-8 outline-sky-900 shadow-lg shadow-black w-[250px] h-[300px] 
                            sm:mr-28 sm:h-[300px] sm:w-[300px] sm:bottom-auto
                        '
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
