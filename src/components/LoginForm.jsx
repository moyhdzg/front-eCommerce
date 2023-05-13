import React, {useContext} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { userContext } from '../context/userContext'
import Header from './Header'
import Footer from './Footer'


const LoginForm = () => {
    //const [loginForm,setLoginForm] = useState()
    const{ userData, setUserData} = useContext(userContext)

    const url = 'https://back-e-commerce-2.vercel.app/apis/v1/auth/login'
    const url2 = 'https://back-e-commerce-2.vercel.app/apis/v1/user/me'
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
            <Header /> 
                <input type="text" name="email" placeholder="Correo Electrónico/E-mail"  onChange={handleChange}/>
                <input type="text" name="password" placeholder="Contraseña/Password"  onChange={handleChange}/>
                <button onClick={()=>{handleSubmit()}}>Entrar/Login</button>
            <Footer />
        </div>
    )
}

export default LoginForm