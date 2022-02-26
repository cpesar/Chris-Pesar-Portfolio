import React from "react";

import { Paper, Grid, Typography } from "@mui/material";
import styled from "styled-components";

const Name = styled.span`
  text-align: center;
`;

const AboutWrapper = styled.div`
  text-align: center;
`;

const About = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Paper
            sx={{
              padding: 20,
              marginTop: -10,
              textAlign: "center",
              color: "white",
              height: 300,
              backgroundColor: "transparent",
            }}
          >
            <Typography
              variant="body1"
              color="primary"
              fontSize="30px"
              fontFamily="Roboto Mono"
            >
              <AboutWrapper>
                {" "}
                <Name>Chris</Name> grew up in Maryland and has called Utah home
                for the last seven years. Those who have worked with{" "}
                <Name>Chris</Name> know him as a detail oriented, results driven
                and passionate web developer with an extensive background in B2C
                sales, and marketing.
                <br />
                <br /> <Name>Chris</Name> recently advanced his education by
                attending the coding bootcamp at the University of Utah which
                compliments his business degree from Towson University, making
                him a well-rounded hire with a lot to offer. <br />
                <br /> When <Name>Chris</Name> is not in front of his computer
                coding you can find him on the beach or in the mountains.
              </AboutWrapper>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
