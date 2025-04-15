import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()
    const handleCal = () => {
        navigate('/calculator')
    }
    const handleUnit = () => {
        navigate('/unit')
    }
    const handleNotes = () => {
        navigate('/notes')
    }
    const handleCurrency = () => {
        navigate('/currency')
    }
    return (
        <div className='h-screen w-screen flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-14 max-h-fit rounded max-w-fit pb-20 bg-[#1e2939] items-center text-white'>


                <header className='text-7xl font-medium mt-5'>
                    Tool-Kit
                </header>

                <div className='flex flex-col gap-4'>
                    <div className='flex gap-3'>

                        <button onClick={handleCal} className='text-3xl hover:text-[#adb5bd] border-2 rounded p-3 bg-[#495057] font-medium'>Calculator</button>

                        <button onClick={handleUnit} className='text-3xl border-2 rounded p-3 bg-[#495057] hover:text-[#adb5bd] font-medium'>Unit Converter</button>
                    </div>
                    <div className='flex gap-3'>

                        <button onClick={handleNotes} className='text-3xl border-2 rounded p-3 bg-[#495057] hover:text-[#adb5bd] font-medium'>Notes</button>

                        <button onClick={handleCurrency} className='text-3xl border-2 rounded p-3 bg-[#495057] hover:text-[#adb5bd] font-medium'>Currency Converter</button>
                    </div>
                </div>

                <p className='w-[500px] h-full  text-[#f9fafb] text-sm text-center'>
                    An all-in-one multifunctional utility app designed to enhance productivity and convenience by seamlessly integrating a feature-rich calculator for quick computations, a sleek notes section for capturing ideas and reminders, a comprehensive unit converter covering a wide range of measurement types, and a real-time currency converter with live exchange rates—making it the perfect everyday companion for students, professionals, and travelers alike.
                </p>
            </div>
            <h1 className='text-2xl uppercase text-[#343a40] font-bold'>Made By Jitain And Amita</h1>

        </div>
    )
}

export default HomePage