import React from "react";

import { Row, Col } from "antd";

import styled from "styled-components";

const HeroContent = styled.div`
  font-color: white;
`;

const Hero = () => {
  return (
    <>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          sx={
            {
              // align: "center",
            }
          }
        >
          <HeroContent>
            Chris grew up in Maryland and has called Utah home for the last five
            years. Those who have worked with Chris know him as a detail
            oriented, results driven and passionate web developer with an
            extensive background in B2C sales, and marketing. Chris recently
            advanced his education by attending the coding bootcamp at the
            University of Utah which compliments his business degree from Towson
            University, making him a well-rounded hire with a lot to offer. When
            Chris is not in front of his computer coding you can find him on the
            beach or in the mountains.
          </HeroContent>
        </Col>
      </Row>
    </>
  );
};

export default Hero;
