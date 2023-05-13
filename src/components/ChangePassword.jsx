import React, { useContext } from 'react'
import axios from 'axios'
import { userContext } from '../context/userContext'
import {Container, Row, Card, Button, Form, Col} from 'react-bootstrap'


const ChangePassword = () => {
    const {userData, setUserData} = useContext(userContext)

    const changePass = async()=>{
        const url = 'https://back-e-commerce-2.vercel.app/apis/v1/changeps'
        const result = await axios.put(url,userData)
        console.log(result)
    }
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
        console.log(setUserData)
    }


    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Form>
                        <Form.Group classname="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.control type='email' name='email' placeholder='Enter email' onChange={handleChange}/>
                            <Form.Label>Password</Form.Label>
                            <Form.control type='password' name='password' placeholder='Enter current Password' onChange={handleChange} />
                            <Form.Label>New Password</Form.Label>
                            <Form.control type='password' name='newPassword' placeholder='Enter new password' onChange={handleChange}/>
                            <Button variant='primary' onClick={()=>changePassword()}>Enviar</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ChangePassword