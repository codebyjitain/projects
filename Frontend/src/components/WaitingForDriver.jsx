import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 onClick={() => {
        props.setWaitingForDriver(false)
      }}
        className='text-center font-bold text-lg text-gray-500'>

        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className='mb-5 text-2xl text-center font-medium'>Driver Details</h3>

      <div className='flex justify-between py-5 items-center'>

        <img className='w-[75px]' src="https://www.svgrepo.com/show/408291/car-white.svg" alt="car image" />
        <div className='flex flex-col text-right'>
          <h2 className='text-lg font-medium'>Jitain</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>HR36 S7621</h4>
          <p className='text-sm text-gray-600'>Platina ki Gaadi</p>
        </div>
      </div>


      <div className='flex justify-between flex-col gap-2 items-center'>


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
      </div>


    </div>
  )
}

export default WaitingForDriver