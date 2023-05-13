import React,{useContext} from 'react'
import axios from 'axios'
import { userContext } from '../context/userContext'

const Register = () => {
    const{ userData, setUserData} = useContext(userContext)

    const saveUser =  async()=>{
        const url ='http://localhost:4003/apis/v1/register'
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
        <div>
            <input type='text' name="name" onChange={handleChange} placeholder='Nombre/Name'/>
            <input type='text' name="lastname" onChange={handleChange} placeholder='Apellido/Lastname'/>
            <input type='text' name="username" onChange={handleChange} placeholder='Nombre de Usuario/Username'/>
            <input type='text' name="email" onChange={handleChange} placeholder='Correo Electrónico/E-mail'/>
            <input type='text' name="password" onChange={handleChange} placeholder='Contraseña/Password'/>
            <button onClick={()=>{saveUser()}}>Crear Cuenta / Sign up</button>
            <ul>
                    <li><a href='/'>Ir a Home</a></li>
                    <li><a href='/register'>Crear Cuenta / Sign Up</a></li>
                    <li><a href='/Login'>Accesar / Sign In</a></li>
            </ul>
        </div>
    )
}

export default Register