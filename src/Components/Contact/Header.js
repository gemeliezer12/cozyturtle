const Header = () => {
  return (
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
          Get in touch
        </p>
      </div>
      <div>
        <p>
          If you wanna get in touch or talk. Feel free to say hi or talk to me.
          Just fill up the form below or send an email to{" "}
          <a
            href=""
            style={{
              color: "var(--base-color-blue)",
              textDecoration: "underline",
            }}
          >
            gemeliezerespiritu@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;
