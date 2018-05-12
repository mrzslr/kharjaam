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
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">منو ۳</Menu.Item>
        <Menu.Item key="2">منو ۲</Menu.Item>
        <Menu.Item key="3">منو ۱</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
  </LocaleProvider>
    )
  }
}
export default Master;