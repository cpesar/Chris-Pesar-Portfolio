import React from "react";

import "antd/dist/antd.css";
import { Row, Col } from "antd";

import styled from "styled-components";

const FooterWrapper = styled.div`
  /* background: transparent !important; */

  /* Allows the text to show over the background image */
  /* position: relative;
  flex-direction: row;
  justify-content: flex-end;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent); */
`;

const FooterName = styled.div`
  font-size: 1em;
  /* text-align: center; */
  color: #1e90ff;
`;

const FooterStyle = {
  // border: "1px solid white",
  height: "80px",
};

const Footer = () => {
  return (
    <>
      <Row>
        <Col
          style={FooterStyle}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
        >
          <FooterWrapper>
            <FooterName>Chris Pesar ©2022</FooterName>
          </FooterWrapper>
        </Col>
        <Col
          style={FooterStyle}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
        >
          <FooterWrapper>
            <FooterName>External Links</FooterName>
          </FooterWrapper>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
