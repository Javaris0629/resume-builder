import React, { useState, useEffect} from 'react'
import { Button, Form, Input, message, Spin } from 'antd';
import {Link, useNavigate} from 'react-router-dom'
import "../resources/authentication.css"
import axios from "axios"


function Login() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const onFinish = async (values) => {
        setLoading(true)
        try {
            const user = await axios.post("/api/user/login", values)
            message.success("Login Successfull")
            localStorage.setItem("resume-user", JSON.stringify(user.data))
            setLoading(false)
            navigate('/')
        } catch (error) {
            setLoading(false)
            message.error("Login Failed")
        }
    };
        useEffect(() => {
            if(localStorage.getItem("resume-user"))
            {
                navigate('./home')
            }
        })
    return (
        <div className='auth-parent'>
        {loading && <Spin size='large' />}
           <Form layout="vertical" onFinish={onFinish}>
           <h1>Login</h1>
                   <hr />
               <Form.Item name='username' label='Username'>
                    <Input placeholder="" />
               </Form.Item>

               <Form.Item name='password' label='Password' >
                    <Input placeholder="" type="password"/>
               </Form.Item>

               <div className="d-flex align items-center justify-content-between">
                   <Link to ="/register">Click Here To Register</Link>
                   <Button type='primary' htmlType='submit'>LOGIN</Button>
               </div>
           </Form>

        </div>
    )
}

export default Login
