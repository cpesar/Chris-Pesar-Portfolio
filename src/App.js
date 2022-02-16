import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

// import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar/Navbar.jsx";

// import Home from "./components/pages/Home.jsx";
// import About from "./components/pages/About.jsx";
// import Contact from "./components/pages/Contact.jsx";
// import Resume from "./components/pages/Resume.jsx";
// import Projects from "./components/pages/Projects.jsx";
import RouterURL from "../src/routerURL";

function App(props) {
  return (
    <>
      {/* return <ThemeProvider theme={theme}><Component {...props} /></ThemeProvider>; */}
      <Router>
        <div>
          <Navbar />
          <RouterURL />
          {/* <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/about" element={About} />
          <Route path="/projects" element={Projects} />
          <Route path="/contact" element={Contact} />
          <Route path="/resume" element={Resume} />
        </Routes> */}
        </div>
      </Router>
    </>
  );
}

export default App;
