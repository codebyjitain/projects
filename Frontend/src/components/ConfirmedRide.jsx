import React from 'react'

const ConfirmedRide = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setConfirmRidePanel(false)
            }}
                className='text-center font-bold text-xl text-gray-500 right-3'>

                <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='mb-5 text-2xl text-center font-medium'>Confirm Your Ride</h3>
            <div className='flex justify-between flex-col gap-2 items-center'>
                <img className='w-[150px]' src="https://www.svgrepo.com/show/408291/car-white.svg" alt="car image" />

                <hr className='bg-gray-400 w-full opacity-30' />
                <div className='w-full flex flex-col items-center'>
                    <div className='flex items-center gap-3 px-5 mb-4'>
                        <h2><i className="bg-[#ddd] inline p-2 rounded-[50%] ri-map-pin-line"></i></h2>
                        <div>

                            <h3 className='font-medium overflow-hidden'>24B, Near Kapoor's cafe,Bhopal</h3>
                            <h5 className='opacity-70'>A place near me</h5>
                        </div>
                    </div>
                    <hr className='bg-gray-400 opacity-30 w-[90%] mb-2' />
                    <div className='flex items-center gap-3 px-5 mb-4'>
                        <h2>
                            <i className="bg-[#ddd] p-2 rounded-[50%] ri-map-pin-user-fill"></i>
                        </h2>
                        <div>

                            <h3 className='font-medium overflow-hidden'>24B, Near Kapoor's cafe,Bhopal</h3>
                            <h5 className='opacity-70'>A place near me</h5>
                        </div>
                    </div>
                    <hr className='bg-gray-400 opacity-30 w-[90%] mb-2' />
                    <div className='flex items-center gap-3 px-5 mb-4'>
                        <h2>
                            <i className="bg-[#ddd] p-2 rounded-[50%] ri-cash-line"></i>
                            
                        </h2>
                        <div className='mt-2'>
                            <h2 className='text-xl font-semibold'>₹193.20</h2>   
                        </div>
                    </div>
                    <hr className='bg-gray-400 opacity-30 w-full mb-5' />
                    
                </div>
                <button onClick={()=>{
                    props.setLookingForDriver(true)
                    props.setConfirmRidePanel(false)
                }} className='cursor-pointer w-full bg-green-600 font-semibold text-white p-2 rounded-lg'>Confirm</button>
            </div>


        </div>
    )
}

export default ConfirmedRide