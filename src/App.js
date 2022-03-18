import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import RouterURL from "../src/routerURL";
import Footer from "./components/pages/MainLayout/Footer.jsx";

function App() {
  return (
    <>
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
