import About from "../Components/Landing/About";
import Contact from "../Components/Landing/Contact";
import Main from "../Components/Landing/Main";
import Projects from "../Components/Landing/Projects";

const Index = () => {
  return (
    <>
      <Main />
      <div
        style={{
          backgroundColor: "var(--bg-color-2)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="HPNXA06qJ7">
          <About />
          <Projects />
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Index;
