import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [panel, setPanel] = useState(false)
  const panelRef = useRef(null)
  const showRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const vehiclePanelRef = useRef(null)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const confirmRidePanelRef = useRef(null)
  const [lookingForDriver, setLookingForDriver] = useState(false)
  const lookingForDriverRef = useRef(null)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const waitingForDriverRef = useRef(null)


  const submitHandler = (e) => {
    e.preventDefault()

  }

  useGSAP(function () {
    if (panel) {
      gsap.to(panelRef.current, {
        height: '70%',
        background: 'white',
        padding: 24,
        visibility: 'visible',
      })
      gsap.to(showRef.current, {
        visibility: 'visible'
      })
    }
    else {
      gsap.to(panelRef.current, {
        height: '0%',
        visibility: 'hidden',
        padding: 0,
        background: 'transparent',
      })
      gsap.to(showRef.current, {
        visibility: 'hidden'
      })
    }
  }, [panel])


  useGSAP(function () {
    if (vehiclePanel) {

      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])


  useGSAP(function () {
    if (confirmRidePanel) {

      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])


  useGSAP(function () {
    if (lookingForDriver) {

      gsap.to(lookingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(lookingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [lookingForDriver])


  useGSAP(function () {
    if (waitingForDriver) {

      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForDriver])



  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="./src/assets/uber-logo-black.svg" alt="logo" />
      <div>
        <img className='h-screen w-full object-cover' src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif" alt="background" />
      </div>
      <div className='h-screen absolute flex flex-col justify-end top-0 w-full '>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={showRef} className='absolute top-6 right-6 cursor-pointer text-2xl' onClick={() => {
            setPanel(false)
          }}>

            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-1 bg-gray-900 rounded-full top-[46%] left-9"></div>
            <input onChange={(e) => {
              setPickUpLocation(e.target.value)
            }} value={pickUpLocation} onClick={(e) => {
              setPanel(true)
            }} className='bg-[#ddd] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location' />


            <input onClick={(e) => {
              setPanel(true)
            }} onChange={(e) => {
              setDestination(e.target.value)
            }} value={destination} className='bg-[#ddd] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className='h-0'>
          <LocationSearchPanel setPanel={setPanel} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>
      {/* vehicle related */}
      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white p-3 w-full rounded'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>


      {/* ride related */}

      <div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white p-3 w-full rounded'>
          <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} setLookingForDriver={setLookingForDriver}/>
      </div>

      {/* checking for driver */}

      <div ref={lookingForDriverRef} className='fixed z-10 bottom-0 translate-y-full bg-white p-3 w-full rounded'>
          <LookingForDriver setLookingForDriver={setLookingForDriver} setWaitingForDriver={setWaitingForDriver}/>
      </div>

      {/* driver found page */}
      <div ref={waitingForDriverRef} className='fixed z-10 bottom-0 translate-y-full bg-white p-3 w-full rounded'>
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
          
      </div>
    </div>
  )
}

export default Home 