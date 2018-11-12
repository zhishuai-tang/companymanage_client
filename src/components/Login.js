import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.css'

const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectToReferrer: false, // 是否重定向到之前的页面
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault(); // 阻止表单默认行为
        this.props.form.validateFields((err, values) => { // 校验表达数据
            if(!err) { // 没有错误，校验通过
                console.log('Received values of form: ', values);
                sessionStorage.setItem('token', '111');
                sessionStorage.setItem('username', values.username);
                const naviData = [
                    {id: '1', path: '/home', title: '首页', hasChildren: false},
                    {id: '2', path: '/sys', title: '系统管理', hasChildren: true},
                        {id: '3', path: '/sys/orgMana', title: '部门管理', parentId: '2', hasChildren: true},
                            {id: '8', path: '/sys/test', title: 'test', parentId: '3', hasChildren: false},
                        {id: '4', path: '/sys/userMana', title: '员工管理', parentId: '2', hasChildren: false},
                    {id: '5', path: '/attendance', title: '考勤管理', hasChildren: true},
                        {id: '6', path: '/attendance/entry', title: '考勤录入', parentId: '5', hasChildren: false},
                        {id: '7', path: '/attendance/query', title: '考勤查询', parentId: '5', hasChildren: false}
                ];
                sessionStorage.setItem('naviData', JSON.stringify(naviData));
                this.setState({
                    redirectToReferrer: true, // 登录成功后，设置跳转标志位，跳转到首页
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { redirectToReferrer } = this.state;
        // 登录成功后，redirectToReferrer设置为true，使用Redirect实现页面挑战
        if (redirectToReferrer) {
            return <Redirect to={{pathname: "/home"}} />
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