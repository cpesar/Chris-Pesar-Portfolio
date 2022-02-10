import React from "react";

import Hero from "./Hero";
import NavBar from "../Navbar/Navbar";

import { Layout, Menu, Breadcrumb, Divider } from "antd";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout>
      <Header>
        <NavBar />
      </Header>
      <Divider />
      {/* <Content style={{ padding: "0 50px" }}> */}
      <Content>
        <Hero />
        {/* <div className="site-layout-content">Content</div> */}
      </Content>
      <Footer style={{ textAlign: "center", color: "white" }}>
        Chris Pesar ©2022
      </Footer>
    </Layout>
  );
};

export default Home;
