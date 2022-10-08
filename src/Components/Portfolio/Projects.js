import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat( auto-fill, minmax(250px, 1fr) )",
        paddingTop: "40px",
        gap: "15px",
      }}
    >
      {projects.map((project) => (
        <Project
          project={project.doc}
          projectId={project.id}
          key={project.id}
        />
      ))}
    </div>
  );
};

export default Projects;
