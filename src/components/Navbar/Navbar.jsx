import React from "react";

import "antd/dist/antd.css";
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
      <Row>
        <Col style={NavStyle} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <NavWrapper>
            <NavName>Chris Pesar</NavName>
          </NavWrapper>
        </Col>
        <Col style={NavStyle} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <NavWrapper>
            <NavName>Menu</NavName>
          </NavWrapper>
        </Col>
      </Row>
    </>
  );
};

export default NavBar;
