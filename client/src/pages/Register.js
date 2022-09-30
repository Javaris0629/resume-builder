import React, {useState, useEffect} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { Button, Form, Input, message, Spin } from 'antd';
import "../resources/authentication.css"
import axios from 'axios'


function Register() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const onFinish = async (values) => {
           setLoading(true)
        try {
        await axios.post("/api/user/register", values)
            setLoading(false)
            message.success("Registration Successfull")
        } catch(error) {
            setLoading(false)
            message.error("Registration Failed")
        }
    }

    useEffect(() => {
        if(localStorage.getItem("resume-user"))
        {
            navigate('/')
        }
    })
    return (
        <div className='auth-parent'>
        {loading && (<Spin size="large" />)}

           <Form layout="vertical" onFinish={onFinish}>
           <h1>Register</h1>
                   <hr />
                   
               <Form.Item name='username' label='Username'>
                    <Input placeholder="Username" />
               </Form.Item>

               <Form.Item name='password' label='Password' >
                    <Input placeholder="Password" type="password"/>
               </Form.Item>

               <Form.Item name='cpassword' label='Confirm Password'>
                    <Input placeholder="Confirm Password" type="password"/>
               </Form.Item>

               <div className="d-flex align items-center justify-content-between">
                   <Link to="/login">Click Here To Login</Link>
                   <Button type='primary' htmlType='submit'>REGISTER</Button>
               </div>
           </Form>
        </div>
    )
}

export default Register
