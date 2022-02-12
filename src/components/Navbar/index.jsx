import React from "react";

import { useMediaQuery } from "react-responsive";

import Logo from "../Logo/Logo";

import NavLinks from "./NavLinks";
import { DeviceSize } from "../Responsive/index.js";
import MobileNavLinks from "./MobileNav";
import Accessibility from "./Accessibility";

import styled from "styled-components";

const NavWrapper = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;

  /* Allows the text to show over the background image */
  position: relative;
  flex-direction: row;
  justify-content: flex-end;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
  color: #ffff00;
`;

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
  );
}

export default NavBar;
