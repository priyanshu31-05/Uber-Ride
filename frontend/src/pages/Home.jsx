import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
     <div className='h-screen w-full pt-5  flex justify-between flex-col bg-red-400 bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/c5310f182519763.652f3606b64b0.jpg)] bg-cover bg-center bg-no-repeat '>
        <img className='w-16 ml-5' src='https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcLzhGbTh4cU5SZGZUVjUxYVh3bnEyLnN2ZyJ9:weare:F1cOF9Bps96cMy7r9Y2d7affBYsDeiDoIHfqZrbcxAw?width=1200&height=417'/>
        <div className='bg-white py-5 px-10 pb-7'>
            <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
            <Link to='/login' className=' flex justify-center items-center w-full bg-black text-white py-3 rounded mt-2'>continue</Link>
        </div>
     </div>
    </div>
  )
}

export default Home
