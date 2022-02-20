// import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import RouterURL from "../src/routerURL";

// import ProjectData from "./data/ProjectData";
// import ProjectList from "./components/pages/Projects/ProjectList.jsx";

function App() {
  // const [project, setProject] = useState(ProjectData);
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <RouterURL />
        </div>
      </Router>
    </>

    // <>
    //   <div className="container">
    //     <ProjectList project={project} />
    //   </div>
    // </>
  );
}

export default App;
