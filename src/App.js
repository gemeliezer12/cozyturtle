import { Route, Routes } from "react-router"

import { ThemeProvider } from "./Components/Contexts/ThemeContext"

import Landing from "./Components/Landing"
import Contact from "./Components/Contact/"
import Portfolio from "./Components/Portfolio"
import Project from "./Components/Portfolio/Project/"
import TopNav from "./Components/TopNav"
import Footer from "./Components/Footer"

import "./styles/lib.css"
import "./styles/utility.css"
import "./styles/style.css"

const App = () => {
    return (
        
            <ThemeProvider>
                <TopNav/>
                <Routes>
                    <Route exact path="/" element={
                        <Landing/>
                    }/>
                    <Route exact path="/contact" element={
                        <Contact/>
                    }/>
                    <Route exact path="/portfolio" element={
                        <Portfolio/>
                    }/>
                    <Route exact path="/portfolio/:currentProjectLinkName" element={
                        <Project/>
                    }/>
                </Routes>
                <Footer/>
            </ThemeProvider>
    )
}

export default App
