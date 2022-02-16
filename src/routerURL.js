import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Contact from "./components/pages/Contact.jsx";
import About from "./components/pages/About.jsx";
import Home from "./components/pages/Home.jsx";

export default class routerURL extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    );
  }
}
