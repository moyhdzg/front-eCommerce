import React, { useContext } from 'react'
import BtnCheckout from './Checkout/BtnCheckout'
import { userContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'                            
import {Button} from 'react-bootstrap'

const Profile = () => {
    const {userData,logout}= useContext(userContext)
    const navitagion = useNavigate()

    const handleLogout = () =>{
        logout()
        navitagion('/')
    }

    return (
        <>
            <Header /> 
            <div>
                <h1>Profile</h1>
                {
                    userData ? (
                        <div>
                            <p>Bienvenido {userData.name}</p>
                            <BtnCheckout/>
                            <Button variant="primary" onClick={handleLogout}>Cerrar Sesion / Logout</Button>
                        </div>
                    ):(
                        <p>No estás "Logeado" / You're not Logged in</p>
                    )
                }

            </div>
            <Footer />
        </>
    )
}

export default Profile