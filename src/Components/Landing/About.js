const About = () => {
  return (
    <div
      className="twnB7Cz2Lp"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 40%",
        gap: "20px",
        paddingLeft: "32px",
        paddingRight: "32px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "Titan One",
              fontSize: "32px",
            }}
          >
            About me
          </p>
        </div>
        <div>
          <p>
            I am a Web Developer who specializes in Full-Stack Development. I
            build websites with React and Node JS. And I would love to help you
            build your dream project.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div>
          <p
            className="ff-titan-one fs-32"
            style={{
              fontFamily: "Titan One",
              fontSize: "32px",
            }}
          >
            Skills
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "6px",
            flexWrap: "wrap",
          }}
        >
          <div
            className="dark"
            style={{
              padding: "1px",
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "4px",
              fontWeight: "700",
              backgroundColor: "var(--base-color-indigo)",
            }}
          >
            <p>React</p>
          </div>
          <div
            className="dark"
            style={{
              padding: "1px",
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "4px",
              fontWeight: "700",
              backgroundColor: "var(--base-color-indigo)",
            }}
          >
            <p>Next JS</p>
          </div>
          <div
            className="dark"
            style={{
              padding: "1px",
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "4px",
              fontWeight: "700",
              backgroundColor: "var(--base-color-indigo)",
            }}
          >
            <p>Node</p>
          </div>
          <div
            className="dark"
            style={{
              padding: "1px",
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "4px",
              fontWeight: "700",
              backgroundColor: "var(--base-color-indigo)",
            }}
          >
            <p>Express</p>
          </div>
          <div
            className="dark"
            style={{
              padding: "1px",
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "4px",
              fontWeight: "700",
              backgroundColor: "var(--base-color-indigo)",
            }}
          >
            <p>JavaScript</p>
          </div>
          <div
            className="dark"
            style={{
              padding: "1px",
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "4px",
              fontWeight: "700",
              backgroundColor: "var(--base-color-indigo)",
            }}
          >
            <p>TypeScript</p>
          </div>
          <div
            className="dark"
            style={{
              padding: "1px",
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "4px",
              fontWeight: "700",
              backgroundColor: "var(--base-color-indigo)",
            }}
          >
            <p>MongoDB</p>
          </div>
          <div
            className="dark"
            style={{
              padding: "1px",
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "4px",
              fontWeight: "700",
              backgroundColor: "var(--base-color-indigo)",
            }}
          >
            <p>Postgres</p>
          </div>
          <div
            className="dark"
            style={{
              padding: "1px",
              paddingLeft: "5px",
              paddingRight: "5px",
              borderRadius: "4px",
              fontWeight: "700",
              backgroundColor: "var(--base-color-indigo)",
            }}
          >
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
