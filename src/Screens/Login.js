import { Form, Input, Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
margin: 24px;
  height: 350px;
  width: 370px;
  padding: 24px;
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Login = () => {
    const naviagte = useNavigate();
   
    const login = async (values) => {
       
        try {
            const response = await fetch('http://localhost:4000/signIn', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            if (response.status === 200) {
                naviagte('/table');
            } else {
                // alert(response.statusText);
                naviagte('/form');
            }
        } catch (error) { }

       
    };
    return (
        <Container>
            <Form onFinish={login}>
                <Form.Item name="username" label="User Name">
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="Password">
                    <Input type='password' />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'> Login </Button>
                </Form.Item>
            </Form>
        </Container>
    )
}

export default Login
