import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import {Layout,Menu,Breadcrumb,Icon,Button,LocaleProvider} from 'antd';

const {SubMenu} =Menu;
const { Header, Content, Footer, Sider } = Layout;
import faIR from 'antd/lib/locale-provider/fa_IR';

class Master extends Component {
  constructor(props){
    super(props);
    this.state={collapsed:false}
  } 
  render(){
    return (
      <LocaleProvider locale={faIR}>
      <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
    >
      <div className="logo" ><img src="" /></div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="user" />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#000', padding: 0 }} >
      {/* <Button type="dashed">Dashed</Button> */}
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
  </LocaleProvider>
    )
  }
}
export default Master;