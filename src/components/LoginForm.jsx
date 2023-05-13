import React, {useContext} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { userContext } from '../context/userContext'

const LoginForm = () => {
    //const [loginForm,setLoginForm] = useState()
    const{ userData, setUserData} = useContext(userContext)

    const url = 'http://localhost:4003/apis/v1/auth/login'
    const url2 = 'http://localhost:4003/apis/v1/user/me'
    const navigation = useNavigate()
    
    const handleSubmit = () =>{
        console.log(userData)
        axios.post(url,userData)
        .then(res=>{
            console.log(res.data)
            return(
                axios.get(url2,{
                    headers:{
                        'Access-Control-Allow-Origin':'*',
                        Authorization: `Bearer ${res.data.token}`
                    }
                }).then(response =>{
                    console.log(response.data)
                    setUserData(response.data)
                    navigation('/profile')
                })
            )
        })
    }

    const handleChange = (e)=>{
        const {name,value} = e.target
        setUserData({
            ...userData,
            [name]:value
        })
        console.log(userData)
    }

    return (
        <div>
            <input type="text" name="email" placeholder="Correo Electrónico/E-mail"  onChange={handleChange}/>
            <input type="text" name="password" placeholder="Contraseña/Password"  onChange={handleChange}/>
            <button onClick={()=>{handleSubmit()}}>Entrar/Login</button>
            <ul>
                <li><a href='/'>Ir a Home</a></li>
                <li><a href='/register'>Crear Cuenta / Sign Up</a></li>
                <li><a href='/Login'>Accesar / Sign In</a></li>
            </ul>
        </div>
    )
}

export default LoginForm