import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

// import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/pages/MainLayout/Footer.jsx";

import RouterURL from "../src/routerURL";

function App(props) {
  return (
    <>
      {/* return <ThemeProvider theme={theme}><Component {...props} /></ThemeProvider>; */}
      <Router>
        <div>
          <Navbar />
          <RouterURL />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
