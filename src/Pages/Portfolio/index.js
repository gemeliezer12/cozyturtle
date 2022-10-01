import { useNavigate } from "react-router-dom";
import Projects from "../../Components/Portfolio/Projects";

const projects = require("../../Components/db.json");

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="HPNXA06qJ7"
          style={{
            padding: "60px 32px",
          }}
        >
          <div
            className="dark"
            onClick={() => navigate(-1)}
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "var(--base-color-indigo)",
              borderRadius: "40px",
              cursor: "pointer",
            }}
          >
            <i
              className="fa-solid fa-arrow-left"
              style={{
                fontSize: "20px",
              }}
            ></i>
          </div>
          <div>
            <p
              style={{
                fontSize: "32px",
                fontFamily: "Titan One",
              }}
            >
              Projects
            </p>
          </div>
          <div
            style={{
              paddingTop: "10px",
            }}
          >
            <p
              style={{
                fontSize: "20px",
              }}
            >
              Here are some of the projects I've done
            </p>
          </div>
          <Projects projects={projects} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
