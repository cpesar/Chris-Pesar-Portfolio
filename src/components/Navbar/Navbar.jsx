import React from "react";

import "antd/dist/antd.css";
import { PageHeader } from "antd";

import styled from "styled-components";

const NavBackground = styled.div`
  background: #7fffd4;
`;

const NavBar = () => {
  return (
    <>
      <NavBackground>
        <PageHeader
          // style={{ position: "fixed", zIndex: 1, width: "100%" }}
          // className="site-page-header"
          // onBack={() => null}
          title="Chris Pesar"
          // subtitle="this is a subtitle"
        ></PageHeader>
      </NavBackground>
    </>
  );
};

export default NavBar;
