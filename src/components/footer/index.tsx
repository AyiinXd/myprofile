import Link from 'next/link'
import React from 'react'
import { BiLogoTelegram, BiLogoWhatsapp, BiLogoGithub, BiLogoInstagram, BiLogoFacebook } from 'react-icons/bi'


const Footer = () => {
    return (
        <div className='bg-sky-950 w-full py-2'>
            <div className='py-4'>
                <div className='flex gap-2 mt-3 justify-center text-xl'>
                    <Link href={`https://t.me/AyiinXd`} className='transition-all duration-200 hover:text-sky-500'><BiLogoTelegram /></Link>
                    <Link href={``} className='transition-all duration-200 hover:text-sky-500'><BiLogoWhatsapp /></Link>
                    <Link href={`https://www.facebook.com/AyiinXd`} className='transition-all duration-200 hover:text-sky-500'><BiLogoFacebook /></Link>
                    <Link href={`https://github.com/AyiinXd`} className='transition-all duration-200 hover:text-sky-500'><BiLogoGithub /></Link>
                    <Link href={``} className='transition-all duration-200 hover:text-sky-500'><BiLogoInstagram /></Link>
                </div>
            </div>
            <div className='py-4 px-16'>
                <div className='flex justify-center gap-16'>
                    <div className='grid gap-2'>
                        <Link href='#profile' className='hover:text-sky-500'>Profile</Link>
                        <Link href='#skills' className='hover:text-sky-500'>Skills</Link>
                    </div>
                    <div className='grid gap-2'>
                        <Link href='#project' className='hover:text-sky-500'>Project</Link>
                        <Link href='#contact' className='hover:text-sky-500'>Contact</Link>
                    </div>
                </div>
            </div>
            <div className='text-center grid gap-2 py-4'>
                <h2 className='text-xs font-semibold'>✨ Tetaplah <span className='text-sky-500'>Mengeluh</span> Dan <span className='text-sky-500'>Putus Asa</span>. ✨</h2>
                <h2 className='text-sm font-bold'>Copyright © {new Date().getFullYear()} AyiinXd - All rights reserved </h2>
            </div>
        </div>
    )
}

export default Footer
