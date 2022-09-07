import { useNavigate } from "react-router-dom";
import Projects from "./Projects";

const projects = require("../db.json");

const Index = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="justify-center">
        <div className="padding-x-32 light padding-y-60 HPNXA06qJ7">
          <div
            class="dark"
            onClick={() => navigate(-1)}
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "var(--indigo)",
              borderRadius: "40px",
              cursor: "pointer",
            }}
          >
            <i
              class="fa-solid fa-arrow-left"
              style={{
                fontSize: "20px",
                color: "var(--text-color-2)",
              }}
            ></i>
          </div>
          <div>
            <p className="fs-32 ff-titan-one">Projects</p>
          </div>
          <div className="padding-top-10">
            <p className="fs-20">Here are some of the projects I've done</p>
          </div>
          <Projects projects={projects} />
        </div>
      </div>
    </>
  );
};

export default Index;
