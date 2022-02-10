import React from "react";

import { Row, Col, Card } from "antd";
import "antd/dist/antd.css";

// import styled from "styled-components";

const HeroStyle = {
  // background: "#ffc0cb",
  border: "1px solid white",
  height: "800px",
};

const Hero = () => {
  return (
    <>
      <Row align="middle">
        <Col style={HeroStyle} xs={2} xxl={4} xl={3}>
          Col
        </Col>
        <Col style={HeroStyle} xs={20} xxl={16} xl={18}>
          Col
        </Col>
        <Col style={HeroStyle} xs={2} xxl={4} xl={3}>
          Col
        </Col>
      </Row>

      {/* <Row align="middle">
        <Col style={HeroStyle} xs={24} xl={24} xxl={24}></Col>
      </Row> */}
    </>
  );
};

export default Hero;
