
import React from 'react'
import { useState , useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'


const Home = () => {
  const [pickup , setPickup] = useState();
  const [destination , setDestination] = useState();
  const [ panelOpen, setPanelOpen ] = useState(false);
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
       e.preventDefault()
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height: '70%',
        opacity:1
      })

      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }
     else{
      gsap.to(panelRef.current,{
        height: '0%',
        opacity:1
      })

      gsap.to(panelCloseRef.current,{
        opacity:0
      })
     }
  },[panelOpen])

  return (
    <div className='h-screen relative overflow-hidden'>
     <img className='w-16 absolute left-5 top-5 ' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt=''/>
    
      <div className='h-screen w-screen'>
      <img className='h-full w-full object-cover' src='https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif' alt=''/>
      </div>

      <div className='flex flex-col justify-end absolute h-screen top-0 w-full '>
    {/*one div*/}
      <div className='h-[30%] p-5 bg-white'>
         
        <h5 
         ref={panelCloseRef}
        onClick={() => {
          setPanelOpen(false)
        }}
        className='absolute opacity-0  right-6 top-6 text-xl'
        ><i class="ri-arrow-down-s-line"></i></h5>
        <h4 className=' text-2xl  font-bold mb-2'>Find a ride</h4>

      <form onSubmit={(e) => {
            submitHandler(e)
      }}>

        
        <input 
        type='text'
        onClick={() => {
         setPanelOpen(true)
         
        }}
        value={pickup}
        onChange={(e) => {
        setPickup(e.target.value)
        }}
        placeholder='Add a pickup location'
        className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' />
   
    
        <input 
        type='text'
        placeholder='Enter a destination' 
        value={destination}
        onClick={() => {
        setPanelOpen(true)
        
        }}
        onChange={(e) => {
          setDestination(e.target.value)
        }}
        className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'/>
      </form>
      </div>
       
        {/*second div*/}
       <div ref={panelRef} className='h-0 px-5 py-1 bg-white '>
         <LocationSearchPanel />
       </div>
       </div>

      <div className='fixed z-10 bottom-0 bg-white w-full p-2'>
        <div className='flex items-center justify-between p-5 gap-3 border-2 rounded-xl border-black'>
          <img className='h-10' src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n' alt=''/>
        <div className='w-1/2'>
          <h4 className='font-medium text-sm'>UberGo <span><i className="ri-user-3-fill"></i></span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-medium text-xs' > affordable, compact rides</p>
        </div>
        <h2 className='text-xl font-medium'>₹194.5</h2>
        </div>

         <div className='flex items-center justify-between p-5 gap-3 border-2 rounded-xl border-black'>
          <img className='h-10' src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n' alt=''/>
        <div className='w-1/2'>
          <h4 className='font-medium text-sm'>UberGo <span><i className="ri-user-3-fill"></i></span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-medium text-xs' > affordable, compact rides</p>
        </div>
        <h2 className='text-xl font-medium'>₹194.5</h2>
        </div>

         <div className='flex items-center justify-between p-5 gap-3 border-2 rounded-xl border-black'>
          <img className='h-10' src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n' alt=''/>
        <div className='w-1/2'>
          <h4 className='font-medium text-sm'>UberGo <span><i className="ri-user-3-fill"></i></span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-medium text-xs' > affordable, compact rides</p>
        </div>
        <h2 className='text-xl font-medium'>₹194.5</h2>
        </div>

         <div className='flex items-center justify-between p-5 gap-3 border-2 rounded-xl border-black'>
          <img className='h-10' src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n' alt=''/>
        <div className='w-1/2'>
          <h4 className='font-medium text-sm'>UberGo <span><i className="ri-user-3-fill"></i></span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-medium text-xs' > affordable, compact rides</p>
        </div>
        <h2 className='text-xl font-medium'>₹194.5</h2>
        </div>
      </div>

    </div>
  )
}

export default Home
