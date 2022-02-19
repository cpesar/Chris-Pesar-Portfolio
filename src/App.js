import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";

import RouterURL from "../src/routerURL";

function App(props) {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <RouterURL />
        </div>
      </Router>
    </>
  );
}

export default App;
