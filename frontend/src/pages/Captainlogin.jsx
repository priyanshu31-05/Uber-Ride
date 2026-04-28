import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainlogin = () => {

  const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState({});


    const submitHandler = (e) => {
  e.preventDefault();
  setCaptainData({
    email: email,
    password: password
  })
 
  
  setEmail('');
  setPassword('');
  
  }
  return (
     <div className='p-10 h-screen flex flex-col justify-between'>
                <div>
                  <img className='w-16 mb-10'
                 src='https://www.svgrepo.com/show/505031/uber-driver.svg'/>
                <form onSubmit={(e) => {
                   submitHandler(e)
                }}>
                  <h3 className='text-xl mb-2'>What's your email</h3>
                  <input
                  required
                  type='email'
                  placeholder='email@example.com'
                  value={email}
                  onChange={(e) => {
                     setEmail(e.target.value)
                  }}
                  className='bg-gray-200 mb-3 rounded px-4 py-2 border w-full'
                  />
          
                  <h3 className='text-xl mb-2' >Enter password</h3>
                  <input
                  required
                  type='password'
                  placeholder='password'
                  value={password}
                  onChange={(e) => {
                     setPassword(e.target.value)
                  }}
                  className='bg-gray-200 mb-7 rounded px-4 py-2 border w-full' 
                  />
          
                  <button  className='bg-black text-white mb-7 rounded px-4 py-2  w-full text-lg '
                  >Login</button>
          
                  <p className='text-center'>Want Join a fleet?  <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
                </form>
                </div>
          
                <div>
                  <Link to='/login'  className='flex items-center justify-center bg-orange-600 text-white mb-7 rounded px-4 py-2  w-full text-lg '
                  >Sign in as User</Link>
                </div>
              </div>
  )
}

export default Captainlogin
