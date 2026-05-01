import { useContext, useState } from 'react'
import { Link} from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {
  const navigate = useNavigate()
  const { setCaptain } = useContext(CaptainDataContext)

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName , setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate , setVehiclePlate] = useState('')
    const [vehicleCapacity , setVehicleCapacity] = useState('')
    const [vehicleType , setVehicleType] = useState('')
    const [error, setError] = useState('')
    
  
const submitHandler = async (e) =>{
    e.preventDefault()
    setError('')

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate:vehiclePlate,
        capacity: Number(vehicleCapacity),
        vehicleType: vehicleType
      }
    
    }
    try {
      const response = await axios.post(
  `${import.meta.env.VITE_BASE_URL}/captain/registerCaptain`,
  captainData
)

      if(response.status === 201){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-login')
        }

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setVehicleColor('');
      setVehicleCapacity('');
      setVehiclePlate('');
      setVehicleType('');
    } catch (err) {
      const message = err.response?.data?.message || err.response?.data?.errors?.[0]?.msg || 'Captain signup failed'
      setError(message)
    }
    
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
         <img className='w-16 mb-2' 
         src='https://www.svgrepo.com/show/505031/uber-driver.svg'/>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
                   
          <h3 className='text-base font-medium mb-2'>What's our Captain name</h3>
          <div className='flex gap-4'>
          <input
             required
              type='text'
             placeholder='Frist name'
             value={firstName}   
            onChange={(e) => {
             setFirstName(e.target.value)
            }}
           className='bg-gray-200 w-1/2 mb-4  rounded px-4 py-2 border '
          />

         <input
           required
           type='text'
           placeholder='Last name'
           value={lastName}     
             onChange={(e) => {
              setLastName(e.target.value)
             }}  
           className='bg-gray-200 mb-4 rounded px-4 py-2 border w-1/2'
         />
        </div>
              <h3 className='text-base font-medium mb-2'>What's our Captain email</h3>
            <input
            required
            type='email'
              placeholder='email@example.com'
              value={email}
              onChange={(e) => {
                  setEmail(e.target.value)
              }}
              className='bg-gray-200 mb-4 rounded px-4 py-2 border w-full'
         />
          
         <h3 className='text-base font-medium mb-2' >Enter password</h3>
         <input
         required
          type='password'
           placeholder='password'
            value={password}   
              onChange={(e) => {
                 setPassword(e.target.value)
              }}  
              className='bg-gray-200 mb-4 rounded px-4 py-2 border w-full' 
          />

          <h3 className='text-base font-medium mb-2'>Vehicle Details</h3>
          <div className='flex gap-4'>
          <input
             required
              type='text'
             placeholder='color'
             value={vehicleColor}   
            onChange={(e) => {
             setVehicleColor(e.target.value)
            }}
           className='bg-gray-200 w-1/2 mb-4  rounded px-4 py-2 border '
          />

         <input
           required
           type='text'
           placeholder='vehicleplate'
           value={vehiclePlate}     
             onChange={(e) => {
              setVehiclePlate(e.target.value)
             }}  
           className='bg-gray-200 mb-4 rounded px-4 py-2 border w-1/2'
         />

        </div>
        <div className='flex gap-4'>
          <input
             required
              type='number'
              min='1'
             placeholder='vehicleCapacity'
             value={vehicleCapacity}   
            onChange={(e) => {
            setVehicleCapacity(e.target.value)
            }}
           className='bg-gray-200 w-1/2 mb-4  rounded px-4 py-2 border '
          />

        <select
              required
              className='bg-gray-200 w-1/2 mb-4  rounded px-4 py-2 border '
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>VehicleType</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Moto</option>
            </select>

        </div>
          {error && <p className='text-red-600 text-sm mb-3'>{error}</p>}
          
          <button  className='bg-black text-white mb-7 rounded px-4 py-2  w-full text-lg '
          >Create Account</button>
          
           <p className='text-center'>Already have an account?  <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
          </form>
           </div>
          
          <div>
            <p className='text-[10px]'> you consent to get calls, including by automated means , from Uber and its affiliates to the number provided</p>
          </div>
              </div>
  )
}

export default CaptainSignup
