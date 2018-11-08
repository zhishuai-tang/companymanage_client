import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.css'

const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectToReferrer: false // 是否重定向到之前的页面
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err) {
                console.log('Received values of form: ', values);
                sessionStorage.setItem('token', '111');
                sessionStorage.setItem('username', values.username);
                this.setState({
                    redirectToReferrer: true
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { redirectToReferrer } = this.state;

        // 登录成功后，redirectToReferrer设置为true，使用Redirect实现页面挑战
        if (redirectToReferrer) {
            return <Redirect to={{pathname: "/home",}} />
        }

        return (
            <Form onSubmit={this.handleSubmit} className='login-form'>
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: '请输入用户名！'}],
                    })(
                        <Input prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder='用户名' />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: '请输入密码！'}],
                    })(
                        <Input prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}}/>} type='password' placeholder='密码' />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住我</Checkbox>
                    )}
                    <a className='login-form-forgot' href=''>忘记密码</a>
                    <Button type='primary' htmlType='submit' className='login-form-button'>
                        登录
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const LoginForm = Form.create()(Login);

export default LoginForm;