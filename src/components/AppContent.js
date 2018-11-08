import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

class AppContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            breadcrumb: props.breadcrumb
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.breadcrumb !== nextProps.breadcrumb ) {
            this.setState({
                breadcrumb: nextProps.breadcrumb
            })
        }
    }

    renderBreadcrumb = (data) => {
        return data.map((item) => {
            if (item.path && item.path.length > 0) {
                return (
                    <Breadcrumb.item><Link to={item.path}>{item.name}</Link></Breadcrumb.item>
                );
            } else {
                return (
                    <Breadcrumb.item>{item.name}</Breadcrumb.item>
                );
            }
        });
    }
    
    render() {
        return (
            <Content style={{padding: '0 5px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    {this.renderBreadcrumb(this.state.breadcrumb)}
                </Breadcrumb>
                <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                    {this.props.children}
                </div>
            </Content>
        );
    }
}

export default AppContent;