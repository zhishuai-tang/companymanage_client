import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './AppHeader.css';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Header } = Layout;

class AppHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: sessionStorage.getItem("username"),
            menu: this.renderMenu(JSON.parse(sessionStorage.getItem("naviData")))
        };

        this.breadcrumbNameMap(JSON.parse(sessionStorage.getItem("naviData")));
    }

    breadcrumbNameMap = (data) => {
        let bread = {};
        data.forEach(item => {
            bread[item.path] = {title: item.title, isParent: item.hasChildren};
        }); 
        sessionStorage.setItem("breadcrumbNameMap", JSON.stringify(bread));
    }

    // 组装菜单
    renderMenu = (data, parentId) => {
        return data.map(item => {
            // 如果是儿子，但不是当前父亲的儿子则返回
            if(item.parentId && (item.parentId!==parentId)) {
                return;
            }
            if (item.hasChildren) {
                return (
                    <SubMenu title={item.title} key={item.id} >
                        {this.renderMenu(data.filter(i => {
                            return i.parentId; // 组装当前父亲的儿子
                            }), item.id
                        )}
                    </SubMenu>
                );
            }
            return (<Menu.Item key={item.id}><Link to={item.path}>{item.title}</Link></Menu.Item>);
        })
    }

    handleLogout = () => {
        this.setState({
            username: null,
            menu: []
        });
        this.props.onLogout();
    }


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
                    {this.state.menu}
                    <SubMenu style={{float: 'right', marginRight: '-30px'}} title={<span><Icon type='user' />{this.state.username}</span>}>
                        <Menu.Item key='setting:1' onClick={this.handleLogout}>退出</Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        );
    }
}

export default AppHeader;