import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "./Context/ThemeContext";

import Landing from "./Pages/Landing";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Project from "./Pages/Portfolio/Project";
import TopNav from "./Components/TopNav";
import Footer from "./Components/Footer";

import "./styles/lib.css";
import "./styles/utility.css";
import "./styles/style.css";

const App = () => {
  return (
    <ThemeProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <TopNav />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            zIndex: "0",
          }}
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="/portfolio/:currentProjectLinkName"
              element={<Project />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
