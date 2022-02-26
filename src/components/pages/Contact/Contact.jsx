import React from "react";

import {
  Typography,
  Box,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";

const ContactForm = () => {
  return (
    <>
      <Box
        border="6px solid blue"
        maxWidth={800}
        marginRight="auto"
        marginLeft="auto"
        paddingTop={20}
        paddingBottom={20}
        paddingLeft={10}
        paddingRight={10}
      >
        <CardContent>
          <Typography gutterBottom variant="h4" align="center">
            Drop me a line!
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="p"
            align="center"
            paddingBottom={5}
            color="textSecondary"
          >
            Please fill out the form below
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  placeholder="Enter your first name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  placeholder="Enter your last name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  type="email"
                  placeholder="Enter your email address"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} paddingBottom={2}>
                <TextField
                  label="Message"
                  placeholder="Your message goes here"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} paddingBottom={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Box>
    </>
  );
};

export default ContactForm;
