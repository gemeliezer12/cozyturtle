import { Link } from "react-router-dom";

const Project = ({ project, projectId }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "15px",
        gap: "10px",
        backgroundColor: "var(--bg-color-4)",
        borderRadius: "10px",
        boxShadow: "0 0 6px -4px black",
      }}
    >
      <div
        style={{
          aspectRatio: "16/9",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={`images/${project.thumbnail}`}
          alt=""
        />
      </div>
      <div>
        <p
          style={{
            fontFamily: "Titan One",
            fontSize: "36px",
          }}
        >
          {project.name}
        </p>
      </div>
      <div>
        <p>{project.description}</p>
      </div>
      <Link
        to={`/portfolio/${project.link_name}`}
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
      </Link>
    </div>
  );
};

export default Project;
