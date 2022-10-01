import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div
      className="Ykbot8gOoa"
      style={{
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
