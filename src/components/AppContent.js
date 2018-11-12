import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

const AppContent = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const breadcrumbNameMap = JSON.parse(sessionStorage.getItem("breadcrumbNameMap"));

    // 组装面包屑
    const breadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            const breadInfo = breadcrumbNameMap[url];
            return (
                <Breadcrumb.Item key={url}>
                    {/* 不是根节点，不添加连接，根节点添加连接可路由到相关模块 */}
                    {breadInfo.isParent ? (
                        <span>{breadInfo.title}</span>
                    ):(
                        <Link to={url}>
                            {breadInfo.title}
                        </Link>
                    )}
                    
                    
                </Breadcrumb.Item>
            );
        });


    return (
        <Content style={{padding: '0 5px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
                {breadcrumbItems}
            </Breadcrumb>
            <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                {props.children}
            </div>
        </Content>
    );
}); 


export default AppContent;