'use client';

import React, { useState } from 'react'


const Contact = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [pesan, setPesan] = useState('');
    const sendEmail = (e: any) => {
        e.prevetDefault();

        if (userName == '') return alert('Username anda kosong!!!')
        if (email == '') return alert('Silahkan untuk mengisi email anda!!!')
        if (pesan == '') return alert('Pesan tidak boleh kosong!!!')

        // Code Send to Email.
        alert(`Username: ${userName} email: ${email} pesan: .....`)
    }
    return (
        <div id='contact' className='h-screen w-full p-16'>
            <h1 className='text-center py-4 text-2xl md:text-3xl font-bold'><span className='text-sky-500'>Contact</span> Me</h1>
            <div className='flex justify-center mt-8 md:mt-20 lg:mt-4'>
                <div className='bg-slate-200 w-max rounded shadow-lg shadow-black text-black md:w-[60%]'>
                    <div className='grid gap-4 p-4 md:p-8'>
                        <div className='grid gap-1'>
                            <label htmlFor="inputUsername" className='text-sm font-semibold'>Nama Pengguna</label>
                            <input
                                type="text"
                                id='inputUsername'
                                onChange={(e) => setUserName(e.target.value)}
                                className='
                                text-xs rounded border-[1px] py-2 px-3
                                focus:shadow focus:shadow-sky-950
                            '
                            />
                        </div>
                        <div className='grid gap-1'>
                            <label htmlFor="inputEmail" className='text-sm font-semibold'>Email</label>
                            <input
                                type="email"
                                id='inputEmail'
                                onChange={(e) => setEmail(e.target.value)}
                                className='
                                text-xs rounded border-[1px] py-2 px-3
                                focus:shadow focus:shadow-sky-950
                            '
                            />
                        </div>
                        <div className='grid gap-1'>
                            <label htmlFor="inputPesan" className='text-sm font-semibold'>Pesan</label>
                            <textarea
                                id='inputpesan'
                                onChange={(e) => setPesan(e.target.value)}
                                className='
                                text-xs rounded-md border-[1px] py-2 px-2 h-40
                                focus:shadow focus:shadow-sky-950
                            '
                            />
                        </div>
                    </div>
                    <div className='flex justify-center p-4'>
                        <button onClick={(e) => sendEmail(e)} className='py-1 px-4 bg-sky-500 text-white rounded-md font-medium'>Kirim Pesan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
