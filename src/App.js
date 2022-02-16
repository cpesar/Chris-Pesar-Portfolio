import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";

import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Resume from "./components/pages/Resume.jsx";
import Projects from "./components/pages/Projects.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/about" element={About} />
          <Route path="/contact" element={Contact} />
          <Route path="/resume" element={Resume} />
          <Route path="/projects" element={Projects} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
