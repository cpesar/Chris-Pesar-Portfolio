import React from "react";
import styled from "styled-components";
import PassportImg from "../../assets/Headshots/uk_dl.png";

const LogoWrapper = styled.div`
  background: transparent !important;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  background: transparent !important;
  width: 29px;
  height: 29px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  background: transparent !important;
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  /* color: #222; */
  color: #ffff00;
  font-weight: 500;
`;

function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={PassportImg} alt="My Passport" />
      </LogoImg>
      <LogoText>Passport</LogoText>
    </LogoWrapper>
  );
}

export default Logo;
