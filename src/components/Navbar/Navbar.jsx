import React from "react";

import "antd/dist/antd.css";
// import { PageHeader } from "antd";
import { Row, Col } from "antd";

import styled from "styled-components";

const NavWrapper = styled.div`
  background: transparent !important;
`;

const NavName = styled.div`
  font-size: 2em;
  /* text-align: center; */
  color: palevioletred;
`;

const NavStyle = {
  border: "1px solid white",
  height: "80px",
};

const NavBar = () => {
  return (
    <>
      <Row align="middle">
        <Col style={NavStyle} xl={18} xxl={12}>
          <NavWrapper>
            <NavName>Chris Pesar</NavName>
          </NavWrapper>
        </Col>
        <Col style={NavStyle} xl={3} xxl={12}>
          <NavWrapper>
            <NavName>Menu</NavName>
          </NavWrapper>
        </Col>
      </Row>
    </>
  );
};

export default NavBar;
