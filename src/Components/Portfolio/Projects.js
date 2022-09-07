import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div className="gap-15 padding-top-40 Ykbot8gOoa">
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
