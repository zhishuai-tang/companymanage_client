import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

function AppFooter(props) {
    return (
        <Footer style={{position: 'fixed', bottom: 0, width: '100%', textAlign: 'center'}}>
            TELEK © 2018 北京京杭天丽科技有限公司
        </Footer>
    );
}

export default AppFooter;