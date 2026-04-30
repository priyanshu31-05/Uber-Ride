import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Start from './pages/Start.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserSignup from './pages/UserSignup.jsx'
import Captainlogin from './pages/Captainlogin.jsx'
import CaptainSignup from './pages/CaptainSignup.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <div>
     <Routes>
      
      <Route path='/' element={<Start />}/>
      <Route path='/login' element={<UserLogin />}/>
      <Route  path='/signup' element={<UserSignup />}/>
      <Route path='/captain-login' element={<Captainlogin />} />
      <Route  path='captain-signup' element={<CaptainSignup />} />
      <Route path='/home' element={<Home />}  />
    

     </Routes>
   
    </div>
    
  )
 
}

export default App
