// import React, { useState } from "react";

// import Email from "./Email";
// import { validateEmail } from "../../../utils/helpers.js";
// import { db } from "../../../firebase";
// import { collection, addDoc } from "@firebase/firestore";

// import Paper from "@mui/material/Paper";
import {
  Grid,
  Paper,
  // TextField,
  // Button,
  // Card,
  // CardContent
  // Typography
} from "@mui/material";

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    marginTop: 20,
    textAlign: "center",
    color: "white",
    fontSize: "50px",
    // fontFamily: "Roboto",
    height: 800,
    width: "96vw",
    backgroundColor: "transparent",
    border: "1px solid white",
  },
};

function ContactForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addDoc(collection(db, "contacts"), {
  //     name: name,
  //     email: email,
  //     message: message,
  //   })
  //     .then(() => {
  //       alert("Message submitted 👍");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });

  //   setName("");
  //   setEmail("");
  //   setMessage("");
  // };

  return (
    <div style={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={classes.paper}>
            Contact Page
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={10} style={classes.paper}>
            Grid 2
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactForm;

// import React, { useState } from "react";
// import Button from "@mui/material";

// import ModalDialog from "../../modals/ModalDialog";

// function ContactForm() {
//   //declare a new state varibale for modal open
//   const [open, setOpen] = useState(false);

//   //function to handle modal open
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   //function to handle modal close
//   const handleClose = () => {
//     setOpen(false);
//   };
//   return (
//     <div>
//       <Button variant="contained" color="primary" onClick={handleOpen}>
//         SignUp
//       </Button>

//       <ModalDialog open={open} handleClose={handleClose} />
//     </div>
//   );
// }

// export default ContactForm;
