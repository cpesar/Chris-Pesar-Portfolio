import React, { useRef, useEffect } from "react";

import { init } from "ityped";

import { Row, Col, Divider } from "antd";
import "antd/dist/antd.css";

import styled from "styled-components";

const HeroStyle = {
  border: "1px solid white",
  height: "800px",
};

const Wrapper = styled.section`
  padding: 4em;
  background: transparent;
`;

const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  color: #ffffff;
`;

const WordList = styled.span`
  color: #ffff00;
`;

const Hero = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 2000,
      backSpeed: 80,
      strings: [
        "Human",
        "Friend",
        "Learner",
        "Developer",
        "Snowboarder",
        "Surfer",
      ],
    });
  });
  return (
    <>
      <Row align="middle">
        <Col style={HeroStyle} xs={2} xxl={4} xl={3}>
          Col
        </Col>
        <Col style={HeroStyle} xs={20} xxl={16} xl={18}>
          <Wrapper>
            <Title>
              Hi. I'm Chris <br />
              <WordList ref={textRef}>
                <br />
              </WordList>
            </Title>
          </Wrapper>
        </Col>
        <Col style={HeroStyle} xs={2} xxl={4} xl={3}>
          Col
        </Col>
      </Row>
      <Divider />

      <Row align="middle">
        <Col style={HeroStyle} xs={2} xxl={4} xl={3}>
          Col
        </Col>
        <Col style={HeroStyle} xs={20} xxl={16} xl={18}>
          <Wrapper>
            <Title>
              I like to build stuff on the internet <br />
            </Title>
          </Wrapper>
        </Col>
        <Col style={HeroStyle} xs={2} xxl={4} xl={3}>
          Col
        </Col>
      </Row>
    </>
  );
};

export default Hero;
