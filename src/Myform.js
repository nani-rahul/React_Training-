import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';


const FormItem = Form.Item;
const Myform = () => {
    const navigate = useNavigate();
 function addMovies(values){
    console.log(values);
    fetch('http://localhost:4000/movie',{
        method : "POST",
        headers : {
        "Content-Type" : "application/json"
        },
        body : JSON.stringify(values),
    }).then((res) => navigate('/table'))
 }

    return (
        <Form onFinish={addMovies}>
            <FormItem label='Movie Name' name='name' >
                <Input />
            </FormItem>
            <FormItem label='Release date' name='release_date' >
                <DatePicker />
            </FormItem>
            <FormItem valuePropName='checked' label='Hit' name='hit' >
                <Checkbox />
            </FormItem>
            <FormItem  >
                <Button type='primary' htmlType='submit' >
                    Submit
                </Button>
            </FormItem>
        </Form>

    );
};



export default Myform

