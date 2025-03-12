import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
            email: email,
            password: password
        })
        setEmail('');
        setPassword('');
    }


    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <div className='flex items-center justify-between'>

                    <img className='w-16 mb-1' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
                    <h1 className='text-xl text-[#415a77]'>Captain Login</h1>
                </div>

                <form onSubmit={(e) => { submitHandler(e) }}>

                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>

                    <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} required placeholder='email@example.com' />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

                    <input type="password" className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' placeholder='password' onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                        value={password} />

                    <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base cursor-pointer'>Login</button>
                </form>
                <p className='text-center '>
                    Join a fleet?
                    <Link to='/captain-signup' className='text-[#415a77]' >Register as a Captain</Link>
                </p>
            </div>
            <div>
                <Link to='/login' className='flex justify-center bg-[#1b263b] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign In as User</Link>
            </div>
        </div>
    )
}

export default CaptainLogin