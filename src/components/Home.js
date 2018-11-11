import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: sessionStorage.getItem('token'),
            username: sessionStorage.getItem('username'),
        }
    }

    logout = () => {
        this.setState({
            token: null,
            username: null
        });
        sessionStorage.clear();
    }
    
    render() {
        const { token, username } = this.state;
        
        if (!token || !username) {
            return <Redirect to={{pathname: '/login'}} />
        }

        return (
            <Layout>
                <AppHeader onLogout={this.logout}/>
                {this.props.children}
                <AppFooter />
            </Layout>
        );
    }
}

export default Home;