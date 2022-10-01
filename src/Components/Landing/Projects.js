import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div
      className="ggcYR7EQsk"
      style={{
        paddingLeft: "32px",
        paddingRight: "32px",
        paddingTop: "80px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "100%",
          gap: "2px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(45deg, var(--base-color-blue) 0%, var(--base-color-indigo) 50%, var(--base-color-purple) 100%)",
            padding: "2px",
            borderTopLeftRadius: "20px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              backgroundColor: "var(--bg-color-2)",
              borderTopLeftRadius: "20px",
            }}
          >
            <p
              style={{
                background:
                  "-webkit-linear-gradient(45deg, var(--base-color-blue) 0%, var(--base-color-indigo) 100%)",
                fontSize: "20px",
                fontWeight: "900",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
            >
              My Projects
            </p>
          </div>
        </div>
        <div
          className="Nw77L5UbA7"
          style={{
            aspectRatio: "16/9",
            borderTopRightRadius: "20px",
            overflow: "hidden",
            transition: "all 0.2s ease",
          }}
        >
          <img
            src="images/cozy-turtle.png"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div
          className="oaufAfS7tU"
          style={{
            aspectRatio: "16/9",
            borderBottomLeftRadius: "20px",
            overflow: "hidden",
            transition: "all 0.2s ease",
          }}
        >
          <img
            src="images/download4.png"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <Link
          to="/portfolio"
          className="mxr0Kms3m5"
          style={{
            background:
              "linear-gradient(45deg, var(--base-color-blue) 0%, var(--base-color-indigo) 50%, var(--base-color-purple) 100%)",
            padding: "2px",
            borderBottomRightRadius: "20px",
            overflow: "hidden",
            transition: "all 0.2s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              backgroundColor: "var(--bg-color-2)",
              borderBottomRightRadius: "20px",
            }}
          >
            <p
              style={{
                background:
                  "-webkit-linear-gradient(45deg, var(--base-color-blue) 0%, var(--base-color-indigo) 100%)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
                fontSize: "20px",
                fontWeight: "900",
              }}
            >
              Show More+
            </p>
          </div>
        </Link>
      </div>
      <div>
        <div>
          <p
            style={{
              fontSize: "32px",
              fontFamily: "Titan One",
            }}
          >
            Project
          </p>
        </div>
        <div>
          <p>
            Here are some of the projects I've done. Feel free to take a look
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
