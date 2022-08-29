const About = () => {
  return (
    <div
      className="padding-x-32 twnB7Cz2Lp"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 40%",
        gap: "20px",
      }}
    >
      <div className="column gap-10">
        <div>
          <p className="ff-titan-one fs-32">About me</p>
        </div>
        <div>
          <p>
            I am a Web Developer who specializes in Full-Stack Development. I
            build websites with React and Node JS. And I would love to help you
            build your dream project.
          </p>
        </div>
      </div>
      <div className="column gap-10">
        <div>
          <p className="ff-titan-one fs-32">Skills</p>
        </div>
        <div
          className="row gap-6"
          style={{
            flexWrap: "wrap",
          }}
        >
          <div
            className="kvcdz3lpy3"
            style={{
              backgroundColor: "var(--indigo)",
            }}
          >
            <p>React</p>
          </div>
          <div
            className="kvcdz3lpy3"
            style={{
              backgroundColor: "var(--indigo)",
            }}
          >
            <p>Node</p>
          </div>
          <div
            className="kvcdz3lpy3"
            style={{
              backgroundColor: "var(--indigo)",
            }}
          >
            <p>JavaScript</p>
          </div>
          <div
            className="kvcdz3lpy3"
            style={{
              backgroundColor: "var(--indigo)",
            }}
          >
            <p>HTML</p>
          </div>
          <div
            className="kvcdz3lpy3"
            style={{
              backgroundColor: "var(--indigo)",
            }}
          >
            <p>CSS</p>
          </div>
          <div
            className="kvcdz3lpy3"
            style={{
              backgroundColor: "var(--indigo)",
            }}
          >
            <p>Git</p>
          </div>
          <div
            className="kvcdz3lpy3"
            style={{
              backgroundColor: "var(--indigo)",
            }}
          >
            <p>Docker</p>
          </div>
          <div
            className="kvcdz3lpy3"
            style={{
              backgroundColor: "var(--indigo)",
            }}
          >
            <p>Postgres</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
