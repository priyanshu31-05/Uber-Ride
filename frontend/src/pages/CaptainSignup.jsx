import React from 'react'
import { Link,} from 'react-router-dom'
import { useState } from 'react'

const CaptainSignup = () => {

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName , setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [signupCaptainData, setSignupCaptainData] = useState({})

    
  
const submitHandler = async (e) =>{
    e.preventDefault()

    

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('')

    
  
  }

  return (
    <div className='p-10 h-screen flex flex-col justify-between'>
      <div>
         <img className='w-16 mb-10' 
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
           className='bg-gray-200 w-1/2 mb-6  rounded px-4 py-2 border '
          />

         <input
           required
           type='text'
           placeholder='Last name'
           alue={lastName}     
             onChange={(e) => {
              setLastName(e.target.value)
             }}  
           className='bg-gray-200 mb-6 rounded px-4 py-2 border w-1/2'
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
              className='bg-gray-200 mb-6 rounded px-4 py-2 border w-full'
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
              className='bg-gray-200 mb-6 rounded px-4 py-2 border w-full' 
          />
          
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
