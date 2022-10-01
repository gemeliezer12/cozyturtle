import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import ImageSlider from "../../Components/Assets/ImageSlider";

const projectList = require("../../Components/db.json");

const Project = () => {
  const [currentProject, setCurrentProject] = useState();
  const navigate = useNavigate();

  const { currentProjectLinkName } = useParams();

  const where = (array, key, value) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].doc[key] === value) {
        return array[i];
      }
    }
  };

  useEffect(() => {
    const res = where(projectList, "link_name", currentProjectLinkName);
    setCurrentProject({ project: res.doc, id: res.id });
  }, [currentProjectLinkName]);

  if (!currentProject) return "";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="padding-y-40 padding-x-32 HPNXA06qJ7"
        style={{
          padding: "40px 32px",
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
              fontSize: "40px",
              fontFamily: "Titan One",
              textAlign: "center",
            }}
          >
            {currentProject.project.name}
          </p>
        </div>
        <div
          style={{
            paddingTop: "32px",
          }}
        />
        <ImageSlider images={currentProject.project.image_slider} />
        <div
          style={{
            paddingTop: "32px",
          }}
        >
          {currentProject.project.link || currentProject.project.code ? (
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              {currentProject.project.link ? (
                <a
                  href={currentProject.project.link}
                  target="_blank"
                  className="dark"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 25px",
                    borderRadius: "4px",
                    fontWeight: "900",
                    backgroundColor: "var(--base-color-indigo)",
                  }}
                >
                  <p>Visit</p>
                </a>
              ) : (
                ""
              )}
              {currentProject.project.code ? (
                <a
                  href={currentProject.project.code}
                  target="_blank"
                  className="dark"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 25px",
                    borderRadius: "4px",
                    fontWeight: "900",
                    backgroundColor: "var(--base-color-rose)",
                  }}
                >
                  <p>Code</p>
                </a>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          <div
            style={{
              paddingTop: "20px",
            }}
          />
          <div>
            <p
              style={{
                fontFamily: "Titan One",
                fontSize: "32px",
              }}
            >
              About This project
            </p>
            <p>{currentProject.project.details}</p>
          </div>
          <div
            style={{
              paddingTop: "20px",
            }}
          >
            <p
              style={{
                fontFamily: "Titan One",
                fontSize: "32px",
              }}
            >
              Tech Stack
            </p>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {currentProject.project.categories.map((tag, index) => (
                <li
                  key={index}
                  style={{
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      backgroundColor: "var(--text-color-1)",
                      height: "4px",
                      width: "4px",
                      borderRadius: "20px",
                    }}
                  ></div>
                  <p>{tag}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
