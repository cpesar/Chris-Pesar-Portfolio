import React from "react";
import Carousel from "react-material-ui-Carousel";

import styled from "styled-components";

const CardStyle = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 15px;
  padding: 40px 50px;
  margin: 20px 0;
  position: relative;
}
`;

function Card({ children }) {
  return (
    <Carousel>
      <CardStyle>{children}</CardStyle>
    </Carousel>
  );
}

export default Card;
