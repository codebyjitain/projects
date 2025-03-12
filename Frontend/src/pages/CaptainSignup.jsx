import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            email: email,
            password: password,
            fullname: {
                firstname: firstName,
                lastname: lastName
            }
        })
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }


    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>

                <div className='flex items-center justify-between mb-1'>

                    <img className='w-16' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
                    <h1 className='text-xl text-[#415a77]'>Captain SignUp</h1>
                </div>
                <form onSubmit={(e) => { submitHandler(e) }}>

                    <h3 className='text-base font-medium mb-2'>What's your name</h3>
                    <div className='flex gap-4 mb-5'>


                        <input className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-sm' type="text" value={firstName} onChange={(e) => {
                            setFirstName(e.target.value)
                        }} required placeholder='First Name' />
                        <input className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-sm' type="text" value={lastName} onChange={(e) => {
                            setLastName(e.target.value)
                        }} required placeholder='Last Name' />
                    </div>

                    <h3 className='text-base font-medium mb-2'>What's your email</h3>

                    <input className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-sm' type="email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} required placeholder='email@example.com' />

                    <h3 className='text-base font-medium mb-2'>Enter Password</h3>

                    <input type="password" className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-sm' placeholder='enter password' onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                        value={password} />

                    <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base cursor-pointer'>Login</button>
                </form>
                <p className='text-center '>
                    Already have a account?
                    <Link to='/captain-login' className='text-[#415a77]'>Login Here</Link>
                </p>
            </div>
            <div>
                <p className='text-xs text-center'>
                    By proceeding SignUp, You can able to Login
                </p>
            </div>
        </div>
    )
}

export default CaptainSignup