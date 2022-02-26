import React from "react";

import {
  Typography,
  Paper,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";

const ContactForm = () => {
  return (
    <>
      <Paper
        sx={{
          maxWidth: 800,
          marginTop: 15,
          marginRight: "auto",
          marginLeft: "auto",
          paddingBottom: "auto",
          borderRadius: "10px",
        }}
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
      </Paper>
    </>
  );
};

export default ContactForm;
