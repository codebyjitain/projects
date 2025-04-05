import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='h-screen pt-8 bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1563282058-c9163e4ab24c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] justify-between flex flex-col bg-red-400 w-full'>
            <img className='w-16 ml-8' src="/src/assets/uber-logo-white.svg" alt="" />
            <div className='bg-white py-4 pb-7 px-4'>
                <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5' > Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start