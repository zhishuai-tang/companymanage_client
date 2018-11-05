import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
//import { Link } from 'react-router-dom';
import './AppHeader.css';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Header } = Layout;

class AppHeader extends Component {

    render() {
        return (
            <Header>
                <div className='logo' />
                <Menu
                    theme='dark'
                    mode='horizontal'
                    defaultSelectedKeys={['1']}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key='1'>首页</Menu.Item>
                    <SubMenu title='系统管理'>
                        <Menu.Item key='2'>部门管理</Menu.Item>
                        <Menu.Item key='3'>员工管理</Menu.Item>
                    </SubMenu>
                    <SubMenu title='考勤管理'>
                        <Menu.Item key='3'>考勤录入</Menu.Item>
                        <Menu.Item key='4'>考勤查询</Menu.Item>
                    </SubMenu>
                    <SubMenu style={{float: 'right', marginRight: '-30px'}} title={<span><Icon type='user' />zhishuai-tang</span>}>
                        <Menu.Item key='setting:1'>退出</Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        );
    }
}

export default AppHeader;