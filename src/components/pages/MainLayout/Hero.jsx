import React, { useRef, useEffect } from "react";

import Box from "@mui/material/Box";

// import { init } from "ityped";

// const HeroStyle = {
//   // border: "1px solid white",
//   height: "800px",
// };

// const Wrapper = styled.section`
//   padding: 4em;
//   background: transparent;
// `;

// const Title = styled.h1`
//   font-size: 5em;
//   text-align: center;
//   color: #ffffff;
// `;

// const WordList = styled.span`
//   color: #ffff00;
// `;

const Hero = () => {
  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: false,
  //     backDelay: 2000,
  //     backSpeed: 80,
  //     strings: ["Human", "Friend", "Learner", "Developer", "Snowboarder"],
  //   });
  // });
  return (
    <>
      <Box
        component="span"
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        This is the box
      </Box>
    </>
  );
};

export default Hero;
