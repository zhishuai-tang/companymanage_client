import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: sessionStorage.getItem('token'),
            username: sessionStorage.getItem('username'),
        }
    }

    render() {
        const { token, username } = this.state;

        if (!token || !username) {
            return <Redirect to={{pathname: '/login'}} />
        }

        return (
            <Layout>
                <AppHeader />
                <AppContent />
                <AppFooter />
            </Layout>
        );
    }
}

export default Home;