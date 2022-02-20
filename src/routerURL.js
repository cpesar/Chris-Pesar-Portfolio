import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Contact from "./components/pages/Contact/Contact.jsx";
import About from "./components/pages/About.jsx";
import Home from "./components/pages/Home.jsx";
import Projects from "./components/pages/Projects.jsx";
// import Projects from "./components/pages/ProjectTrial";
import Resume from "./components/pages/Resume.jsx";

// import ProjectData from "./data/ProjectData";
// import ProjectList from "./components/pages/Projects/ProjectList.jsx";

export default class routerURL extends Component {
  render() {
    // const [project, setProject] = useState(ProjectData);
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    );
  }
}
