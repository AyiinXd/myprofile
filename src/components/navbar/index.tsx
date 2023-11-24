'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'


const Navbar = () => {
    const [icons, setIcons] = useState(false)

    const handleMenu = (e: any) => {
        e.preventDefault();
        setIcons(!icons)
    }

    useEffect(() => {
        window.onclick = function (e: any) {
            e.preventDefault()

            if (!e.target.matches('.popUpMenu') && !e.target.matches('.toggleMenu')) {
                setIcons(false);
            }
        }
    })

    return (
        <div
            className={`fixed w-full px-[1.5rem] bg-gradient-to-r from-violet-950 to-sky-950 sm:px-16 py-4 left-0 text-white z-50`}
        >
            <div className='flex justify-between items-center'>
                <div>
                    <h2
                        className='
                            text-xl font-bold cursor-pointer transition ease-in-out duration-200
                            hover:text-sky-600
                            sm:text-[2rem]
                        '
                        onClick={() => { window.location.href = '/' }}
                    >
                        AyiinXd
                    </h2>
                </div>
                <div className=' text-center text-[1rem] hidden font-semibold sm:flex sm:gap-4'>
                    <Link
                        className='
                        mx-2 transition ease-linear duration-200 inline-block
                        hover:text-sky-600
                        after:contents-[""] after:block after:pb-[1px] after:border-b-[1px] after:border-sky-600 after:scale-x-0
                        hover:after:scale-x-[0.5] hover:after:transition hover:after:ease-linear hover:after:duration-200 
                        '
                        href='#home'
                    >
                        Profile
                    </Link>
                    <Link
                        className='
                        mx-2 transition ease-linear duration-200 inline-block
                        hover:text-sky-600
                        after:contents-[""] after:block after:pb-[1px] after:border-b-[1px] after:border-sky-600 after:scale-x-0
                        hover:after:scale-x-[0.5] hover:after:transition hover:after:ease-linear hover:after:duration-200 
                        '
                        href='#skills'
                    >
                        Skills
                    </Link>
                    <Link
                        className='
                        mx-2 transition ease-linear duration-200 inline-block
                        hover:text-sky-600 
                        after:contents-[""] after:block after:pb-[1px] after:border-b-[1px] after:border-sky-600 after:scale-x-0
                        hover:after:scale-x-[0.5] hover:after:transition hover:after:ease-linear hover:after:duration-200 
                        '
                        href='#project'
                    >
                        Project
                    </Link>
                    <Link
                        className='
                        mx-2 transition ease-linear duration-200 inline-block
                        hover:text-sky-600 
                        after:contents-[""] after:block after:pb-[1px] after:border-b-[1px] after:border-sky-600 after:scale-x-0
                        hover:after:scale-x-[0.5] hover:after:transition hover:after:ease-linear hover:after:duration-200 
                        '
                        href='#contact'
                    >
                        Contact
                    </Link>
                </div>
                <div className='toggleMenu relative right-3 sm:hidden'>
                    <button className='toggleMenu bg-transparent border-none outline-none w-full cursor-pointer' onClick={(e) => handleMenu(e)}>Menu<span className='toggleMenu absolute top-[0.1rem] text-xl'>{icons ? <HiChevronUp /> : <HiChevronDown />}</span></button>
                </div>
                <div
                    className={`
                    bg-gradient-to-r from-violet-950 to-sky-950 w-full top-[100%] shadow shadow-slate-700 right-1 flex-col absolute rounded-xl p-6 flex transition-all duration-300 ${icons ? 'left-0' : '-left-[100%]'}`}>
                    <div className='text-center'>
                        <div className='popUpMenu grid text-center text-[1rem] font-semibold gap-4 mb-4 sm:hidden'>
                            <Link
                                className='
                                mx-2 transition ease-linear duration-200 inline-block
                                hover:text-sky-600
                                after:contents-[""] after:block after:pb-[1px] after:border-b-[1px] after:border-sky-600 after:scale-x-0
                                hover:after:scale-x-[0.1] hover:after:transition hover:after:ease-linear hover:after:duration-200 
                                '
                                href='#home'
                            >
                                Profil
                            </Link>
                            <Link
                                className='
                                transition ease-linear duration-200 inline-block
                                hover:text-sky-600
                                after:contents-[""] after:block after:pb-[1px] after:border-b-[1px] after:border-sky-600 after:scale-x-0
                                hover:after:scale-x-[0.1] hover:after:transition hover:after:ease-linear hover:after:duration-200
                                '
                                href='#skills'
                            >
                                Skills
                            </Link>
                            <Link
                                className='
                                transition ease-linear duration-200 inline-block
                                hover:text-sky-600
                                after:contents-[""] after:block after:pb-[1px] after:border-b-[1px] after:border-sky-600 after:scale-x-0
                                hover:after:scale-x-[0.1] hover:after:transition hover:after:ease-linear hover:after:duration-200
                                '
                                href='#project'
                            >
                                Project
                            </Link>
                            <Link
                                className='
                                transition ease-linear duration-200 inline-block
                                hover:text-sky-600
                                after:contents-[""] after:block after:pb-[1px] after:border-b-[1px] after:border-sky-600 after:scale-x-0
                                hover:after:scale-x-[0.1] hover:after:transition hover:after:ease-linear hover:after:duration-200
                                '
                                href='#contact'
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
