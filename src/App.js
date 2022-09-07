import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "./Components/Contexts/ThemeContext";

import Landing from "./Components/Landing";
import Contact from "./Components/Contact/";
import Portfolio from "./Components/Portfolio";
import Project from "./Components/Portfolio/Project/";
import TopNav from "./Components/TopNav";
import Footer from "./Components/Footer";

import "./styles/lib.css";
import "./styles/utility.css";
import "./styles/style.css";

const App = () => {
  return (
    <ThemeProvider>
      <TopNav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/portfolio/:currentProjectLinkName"
          element={<Project />}
        />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
