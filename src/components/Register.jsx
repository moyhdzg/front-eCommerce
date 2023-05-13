import React,{useContext} from 'react'
import axios from 'axios'
import { userContext } from '../context/userContext'
import Header from './Header'
import Footer from './Footer'
import {Button} from 'react-bootstrap'

const Register = () => {
    const{ userData, setUserData} = useContext(userContext)

    const saveUser =  async()=>{
        const url ='https://back-e-commerce-2.vercel.app/apis/v1/register'
        const result = await axios.post(url, userData)
        console.log(result)
    }

    const handleChange = (e) =>{
        const {name,value} = e.target
        setUserData({
            ...userData,
            [name]:value
        })
        console.log(userData)
    }

    return (
        <>
            <Header /> 
            <div>
                <input type='text' name="name" onChange={handleChange} placeholder='Nombre/Name'/>
                <input type='text' name="lastname" onChange={handleChange} placeholder='Apellido/Lastname'/>
                <input type='text' name="username" onChange={handleChange} placeholder='Nombre de Usuario/Username'/>
                <input type='text' name="email" onChange={handleChange} placeholder='Correo Electrónico/E-mail'/>
                <input type='text' name="password" onChange={handleChange} placeholder='Contraseña/Password'/>
                <Button variant="primary" onClick={()=>{saveUser()}}>Crear Cuenta / Sign up</Button>
            </div>
            <Footer />       
        </>
    )
}

export default Register