const Footer = () => {
  return (
    <div
      className="opposite"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 32px",
        backgroundColor: "var(--bg-color-2)",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <p>
          Created with React{" "}
          <i
            className="fab fa-react"
            style={{
              color: "#0ea5e9",
            }}
          ></i>{" "}
          by{" "}
          <a
            href="https://github.com/gemeliezer12"
            target="_blank"
            style={{
              color: "var(--base-color-blue)",
              textDecoration: "underline",
            }}
          >
            Gem Eliezer
          </a>{" "}
          <i
            className="fab fa-github"
            style={{
              color: "var(--text-color-1)",
            }}
          ></i>
        </p>
      </div>
      {/* <div className="row align-center gap-4" style={{
        display: "flex",
        alignItems: "center",
        gap: "4px"
      }}>
        <p>Interested in working with me? Visit my</p>
        <img
          src="images/firverr.png"
          alt=""
          style={{
            height: "16px",
            width: "16px",
            borderRadius: "50%",
          }}
        />
        <a
          href="https://www.fiverr.com/gemeliezer?up_rollout=true"
          style={{
            color: "var(--base-color-blue)",
            textDecoration: "underline",
          }}
        >
          fiverr account
        </a>
      </div> */}
    </div>
  );
};

export default Footer;
