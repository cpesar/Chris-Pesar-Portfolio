import React from "react";
// import { Link } from "react-router-dom";

// import BurgerMenu from './BugerMenu';
import { useMediaQuery } from "react-responsive";

import Logo from "../Logo/Logo";

import NavLinks from "./NavLinks";
import { DeviceSize } from "../Responsive/index.js";
import MobileNavLinks from "./MobileNav";
import Accessibility from "./Accessibility";

// import "antd/dist/antd.css";
// import { Row, Col } from "antd";

import styled from "styled-components";

const NavWrapper = styled.div`
  background: transparent !important;
  width: 100%;
  height: 60px;
  /* box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13); */
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;

const LeftSection = styled.div`
  background: transparent !important;
  display: flex;
`;

const MiddleSection = styled.div`
  background: transparent !important;
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  background: transparent !important;
  display: flex;
  color: #ffff00;
`;

// const NavName = styled.div`
//   font-size: 2em;
/* text-align: center; */
/* color: #1e90ff;
`; */

// const NavStyle = {
//   border: "1px solid white",
//   height: "80px",
// };

function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  return (
    <NavWrapper>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavWrapper>
    // <Row>
    //   <Col style={NavStyle} xs={12} sm={12} md={12} lg={12} xl={12} xxl={16}>
    //     <NavWrapper>
    //       <NavName>Chris Pesar</NavName>
    //     </NavWrapper>
    //   </Col>

    //   <Col style={NavStyle} xs={12} sm={12} md={12} lg={12} xl={12} xxl={2}>
    //     <NavWrapper>
    //       <NavName>About</NavName>
    //     </NavWrapper>
    //   </Col>

    //   <Col style={NavStyle} xs={12} sm={12} md={12} lg={12} xl={12} xxl={2}>
    //     <NavWrapper>
    //       <NavName>Projects</NavName>
    //     </NavWrapper>
    //   </Col>

    //   <Col style={NavStyle} xs={12} sm={12} md={12} lg={12} xl={12} xxl={2}>
    //     <NavWrapper>
    //       <NavName>Resume</NavName>
    //     </NavWrapper>
    //   </Col>

    //   <Col style={NavStyle} xs={12} sm={12} md={12} lg={12} xl={12} xxl={2}>
    //     <NavWrapper>
    //       <NavName>Contact</NavName>
    //     </NavWrapper>
    //   </Col>
    // </Row>
  );
}

export default NavBar;
