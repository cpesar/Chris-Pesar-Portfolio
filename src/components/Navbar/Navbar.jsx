import React from "react";

import "antd/dist/antd.css";
import { PageHeader } from "antd";

import styled from "styled-components";

const NavBackground = styled.div`
  /* background: none; */
`;

const NavBar = () => {
  return (
    <>
      <NavBackground>
        <PageHeader
          // style={{ color: "white" }}
          // className="site-page-header"
          // onBack={() => null}
          title="Chris Pesar"
          // ghost={false}
          // subtitle="this is a subtitle"
        ></PageHeader>
      </NavBackground>
    </>
  );
};

export default NavBar;
