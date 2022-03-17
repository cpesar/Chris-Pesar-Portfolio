import React, { useState } from "react";

import { db } from "../../../firebase.config";
import { collection, addDoc } from "@firebase/firestore";

import {
  Typography,
  Paper,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "contacts"), {
      name: name,
      email: email,
      message: message,
    })
      .then(() => {
        alert("Message submitted 👍");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <Paper
        sx={{
          maxWidth: 800,
          marginTop: 15,
          marginRight: "auto",
          marginLeft: "auto",
          paddingBottom: "auto",
          borderRadius: "5px",
          backgroundColor: "#dcdcdc",

          // backgroundColor: "#213c52",
          // backgroundBlendMode: "screen",
          // position: "relative",
          // mixBlendMode: "hard-light",
        }}
      >
        <CardContent onSubmit={handleSubmit}>
          <Typography
            gutterBottom
            variant="h4"
            align="center"
            fontFamily="Roboto Mono, monospace;"
            fontWeight="bold"
          >
            Drop me a line!
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="p"
            align="center"
            paddingBottom={5}
            color="primary"
            // color="textSecondary"
            fontFamily="Roboto Mono, monospace;"
            // fontWeight="bold"
          >
            Please fill out the form below
          </Typography>

          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  placeholder="Please enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} paddingBottom={2}>
                <TextField
                  label="Message"
                  placeholder="Your message goes here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
