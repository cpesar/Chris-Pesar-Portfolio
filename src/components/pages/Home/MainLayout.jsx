import React from "react";

import Hero from "./Hero";
import NavBar from "../../Navbar/index";
import Footer from "./Footer";

import { Layout, Menu, Breadcrumb, Divider } from "antd";
import "antd/dist/antd.css";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <NavBar />
      {/* <Divider /> */}

      <Content>
        <Hero />
      </Content>

      <Divider />
      <Footer />
    </Layout>
  );
};

export default MainLayout;
