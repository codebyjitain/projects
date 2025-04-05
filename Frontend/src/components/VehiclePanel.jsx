import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={() => {
          props.setVehiclePanel(false)
        }}
          className='p-3 text-center absolute top-2 font-bold text-xl text-gray-500 right-3'>

          <i className="ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className='mb-5 text-2xl font-medium'>Choose a Vehicle</h3>

        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='cursor-pointer flex items-center justify-between border-2 rounded-xl border-transparent rounded-xl hover:border-black bg-[#ddd] px-2 py-1 mb-3 gap-3 w-full'>
          <img className='w-[70px] ' src="https://www.svgrepo.com/show/408291/car-white.svg" alt="car" />
          <div className='flex flex-col w-3/4'>
            <h4 className='text-xl font-medium'>UberGO <span><i className="ri-user-fill">4</i></span></h4>
            <h5>2 mins away</h5>
            <p className='text-gray-500 text-sm'>Affordable, Compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹193.20</h2>
        </div>


        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='cursor-pointer flex items-center justify-between border-2 border-transparent rounded-xl hover:border-black bg-[#ddd] px-2 py-1 mb-3 gap-3 w-full'>
          <img className='w-[70px] ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="car" />
          <div className='flex flex-col w-3/4'>
            <h4 className='text-xl font-medium'>Bike <span><i className="ri-user-fill">1</i></span></h4>
            <h5>2 mins away</h5>
            <p className='text-gray-500 text-sm'>Affordable, Bikes rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹40</h2>
        </div>


        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='flex items-center cursor-pointer justify-between border-2 rounded-xl border-transparent rounded-xl hover:border-black bg-[#ddd] px-2 py-1 mb-3 gap-3 w-full'>
          <img className='w-[70px] ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="car" />
          <div className='flex flex-col w-3/4'>
            <h4 className='text-xl font-medium'>Auto <span><i className="ri-user-fill">3</i></span></h4>
            <h5>2 mins away</h5>
            <p className='text-gray-500 text-sm'>Affordable, Auto rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹65</h2>
        </div>
    </div>
  )
}

export default VehiclePanel