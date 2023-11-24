import React from 'react'

import logo from '@/assets/logo.png'
import Image from 'next/image'

const datas = [
    {
        title: 'Javascript',
        desc: 'Untuk saat ini saya sedang tahap mempelajari JavaScript untuk membuat website.',
    },
    {
        title: 'Pyhton',
        desc: 'Di Python saya mulai belajar sejak 2019 dan saya membuat Bot Telegram dengan Python.',
    },
    // {
    //     title: 'Html',
    //     desc: 'Pengetahuan saya tentang HTML masih sedikit karna saya lebih menyukai Javascript.',
    // },
    // {
    //     title: 'Css',
    //     desc: 'CSS adalah styling yang sangat sering saya gunakan. Saya menyukainya karna sangat mudah untuk digunakan dan di pahami.',
    // },
]


const Skills = () => {
    return (
        <div id='skills' className='h-screen w-full p-8'>
            <h1 className='text-center py-10 text-3xl font-bold'>My <span className='text-sky-500'>Skills</span></h1>
            <div className='mt-16 sm:flex sm:justify-around sm:items-center lg:mt-8'>
                <div className='hidden md:flex'>
                    <Image
                        src={logo}
                        alt='...'
                        width={0}
                        height={0}
                        priority
                        className='
                            md:h-[300px] md:w-[300px]
                            lg:h-[450px] lg:w-[450px]
                        '
                    />
                </div>
                <div className='grid grid-cols-2 gap-4 sm:p-8 sm:w-[50%] sm:h-80 md:w-[70%] lg:w-[50%]'>
                    {datas.map((data, index) => {
                        return (
                            <div key={index} className='p-4 text-black text-center bg-slate-200 rounded-xl shadow-md shadow-black'>
                                <h2 className='mb-4 font-bold sm:text-2xl'>{data.title}</h2>
                                <p className='font-semibold sm:text-xl'>{data.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills
