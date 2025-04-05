import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'


const CaptainSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const { captain, setCaptain } = React.useContext(CaptainDataContext);

    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const newCaptain = {
            email: email,
            password: password,
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            vehicle: {
                color: vehicleColor,
                capacity: vehicleCapacity,
                plate: vehiclePlate,
                vehicleType: vehicleType
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,newCaptain);

        if(response.status === 201){
            const data = response.data;

            setCaptain(data.captain);

            localStorage.setItem('token',data.token);
            navigate('/captain-home');
        }

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setVehicleCapacity('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleType('');
    }


    return (
        <div className='p-7 h-auto flex flex-col justify-between'>
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

                    <h3 className='text-base font-medium mb-2 mt-4 text-center'>------Vehicle Information------</h3>
                    <div className='flex gap-4 mb-5'>


                        <input className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-sm' type="text" value={vehiclePlate} onChange={(e) => {
                            setVehiclePlate(e.target.value)
                        }} required placeholder='Vehicle Color' />
                        <input className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-sm' type="text" value={vehicleColor} onChange={(e) => {
                            setVehicleColor(e.target.value)
                        }} required placeholder='Vehicle Plate' />
                    </div>

                    <div className='flex gap-4 mb-5'>


                        <input className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-sm' type="number" value={vehicleCapacity} onChange={(e) => {
                            setVehicleCapacity(e.target.value)
                        }} required placeholder='Vehicle Capacity' />
                        <select className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-sm' type="search" value={vehicleType} onChange={(e) => {
                            setVehicleType(e.target.value)
                            console.log(e.target.value)
                        }} required placeholder='Vehicle type' >
                            <option value="auto">Auto</option>
                            <option value="bike">Bike</option>
                            <option value="car">Car</option>
                        </select>
                    </div>


                    <button onClick={(e) => {submitHandler(e)}} className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base cursor-pointer'>Create Account</button>
                </form>
                <p className='text-center '>
                    Already have a account?
                    <Link to='/captain-login' className='text-[#415a77]'>Login Here</Link>
                </p>
            </div>
            <div>
                <p className='text-xs text-center mt-5'>
                    By proceeding SignUp, You can able to Login
                </p>
            </div>
        </div>
    )
}

export default CaptainSignup