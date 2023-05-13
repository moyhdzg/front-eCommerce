import React, { useContext } from 'react'
import BtnCheckout from './Checkout/BtnCheckout'
import { userContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const {userData,logout}= useContext(userContext)
    const navitagion = useNavigate()

    const handleLogout = () =>{
        logout()
        navitagion('/')
    }

    return (
        <div>
            <h1>Profile</h1>
            {
                userData ? (
                    <div>
                        <p>Bienvenido {userData.name}</p>
                        <BtnCheckout/>
                        <button onClick={handleLogout}>Cerrar Sesion / Logout</button>
                    </div>
                ):(
                    <p>No estás "Logeado" / You're not Logged in</p>
                )
            }
            <ul>
                <li><a href='/'>Ir a Home</a></li>
                <li><a href='/register'>Crear Cuenta / Sign Up</a></li>
                <li><a href='/Login'>Accesar / Sign In</a></li>
            </ul>
        </div>
    )
}

export default Profile