import Projects from "./Projects";

const projects = require("../db.json");

const Index = () => {
  return (
    <>
      <div className="justify-center">
        <div className="padding-x-32 light padding-y-60 HPNXA06qJ7">
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
