import React from "react";

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
  return <CardStyle>{children}</CardStyle>;
}

export default Card;
