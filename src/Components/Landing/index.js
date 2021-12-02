import { useTheme } from "../Contexts/ThemeContext"
import Footer from "../Footer"
import TopNav from "../TopNav"
import About from "./About"
import Contact from "./Contact"
import Main from "./Main"
import Projects from "./Projects"

const Index = () => {
    const { colorTheme } = useTheme()

    return (
        <>
            <Main/>
            <div className="light justify-center" style={{
                backgroundColor: "var(--bg-color-2)"
            }}>
                <div className="HPNXA06qJ7">
                    <About/>
                    <Projects/>
                </div>
            </div>
            <Contact/>
        </>
    )
}

export default Index
