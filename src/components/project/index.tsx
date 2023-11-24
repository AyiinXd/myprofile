import Image from 'next/image'
import React from 'react'

import userbot from '@/assets/userbot.jpg'
import Link from 'next/link'


const Project = () => {
    return (
        <div id='project' className='h-screen w-full p-8'>
            <h1 className='text-center py-10 text-3xl font-bold'>My <span className='text-sky-500'>Project</span></h1>
            <div className='mt-16 flex justify-center sm:justify-around sm:items-center sm:mt-0'>
                <div className='
                    flex flex-col items-center justify-center w-[300px] bg-slate-200 p-4 rounded-md shadow-md shadow-black
                    sm:w-[50%] 
                    md:w-[60%]
                    lg:w-[40%]
                '>
                    <Image
                        src={userbot}
                        alt='...'
                        height={0}
                        width={0}
                        priority
                        className='rounded-md h-[150px] w-[250px] shadow-md shadow-slate-900'
                    />
                    <div className='text-black flex flex-col items-center justify-center py-2 px-8'>
                        <h2 className='text-lg font-bold'>TechGramBot</h2>
                        <p className='bg-gray-300 font-semibold text-sm mb-2 px-3'>NextJs</p>
                        <p className='text-center text-xs font-semibold md:text-lg'>Yang dibuat untuk memberikan userbot telegram dengan gratis tetapi hanya bisa membuat 1 userbot untuk akun yang tidak premium.</p>
                        <Link href='https://techgrambot.vercel.app/' className='mt-4 py-1 px-6 rounded text-xs font-semibold bg-sky-500'>View</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
