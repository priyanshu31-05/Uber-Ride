import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'

const Captainlogout = () => {

    const navigate = useNavigate()
    const { setCaptain } = useContext(CaptainDataContext)

    useEffect(() => {
        const token = localStorage.getItem('token')

        axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logoutCaptain`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('token')
                setCaptain(null)
                navigate('/captain-login')
            }
        }).catch((err) => {
            console.log(err)
            localStorage.removeItem('token')
            setCaptain(null)
            navigate('/captain-login')
        })
    }, [navigate, setCaptain])

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    )
}

export default Captainlogout