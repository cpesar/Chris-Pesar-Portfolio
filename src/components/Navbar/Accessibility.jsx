import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;

  /* Allows the text to appear over the background */
  position: relative;
  flex-direction: row;
  justify-content: flex-end;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
`;

// const RegisterButton = styled.button`
//   border: 0;
//   outline: 0;
//   padding: 8px 1em;
//   color: #ffff00;
//   font-size: 13px;
//   font-weight: 600;
//   border-radius: 20px;
//   background-color: #6adf76;
//   background-image: linear-gradient(to right, transparent 0%, #00c9ff 100%);
//   transition: all 240ms ease-in-out;
//   cursor: pointer;

//   &:hover {
//     background-color: #00c9ff;
//   }

//   &:not(:last-of-type) {
//     margin-right: 7px;
//   }
// `;

// const LoginButton = styled.button`
//   border: 0;
//   outline: 0;
//   padding: 8px 1em;
//   margin-right: 40px;
//   color: #222;
//   /* color: #ffff00; */
//   font-size: 13px;
//   font-weight: 600;
//   border-radius: 20px;

//   transition: all 240ms ease-in-out;
//   cursor: pointer;

//   &:hover {
//     color: #fff;
//     background-color: #00c9ff;
//   }

//   &:not(:last-of-type) {
//     margin-right: 7px;
//   }
// `;

function Accessibility(props) {
  return (
    <AccessibilityContainer>
      {/* <RegisterButton>Register</RegisterButton>
      <LoginButton>Login</LoginButton> */}
    </AccessibilityContainer>
  );
}

export default Accessibility;
