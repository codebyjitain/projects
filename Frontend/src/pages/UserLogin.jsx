import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})
    
    const submitHandler = (e)=>{
        e.preventDefault();
        setUserData({
            email:email,
            password: password
        })
        setEmail('');
        setPassword('');
    }


    return (
            <div className='p-7 h-screen flex flex-col justify-between'>
                <div>
                <div className='flex items-center justify-between mb-5'>

                    <img className='w-16' src="/src/assets/uber-logo-black.svg" alt="" />
                    <h1 className='text-xl text-[#415a77]'>User Login</h1>
                </div>
                    <form onSubmit={(e)=>{submitHandler(e)}}>

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
                        New Here?
                        <Link to='/signup' className='text-[#415a77]' >Create New Account</Link>
                    </p>
                </div>
                <div>
                    <Link to='/captain-login' className='flex justify-center bg-[#778da9] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign In as Captain</Link>
                </div>
            </div>
        )
}

export default UserLogin