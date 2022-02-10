import React from "react";

// import NavBar from "../Navbar/Navbar";
import Hero from "./Hero";

import { Layout, Menu, Breadcrumb, Divider } from "antd";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout>
      <Header>
        {/* <NavBar /> */}
        {/* <div className="logo" /> */}
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          {new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
          })}
        </Menu> */}
      </Header>
      <Divider />
      {/* <Content style={{ padding: "0 50px" }}> */}
      <Content>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Hero />
        {/* <div className="site-layout-content">Content</div> */}
      </Content>
      <Footer style={{ textAlign: "center" }}>Chris Pesar ©2022</Footer>
    </Layout>
  );
};

export default Home;
