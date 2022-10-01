import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div
      className="dark"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "var(--base-color-indigo)",
        position: "sticky",
        top: "0",
        zIndex: "1",
      }}
    >
      <div
        className="HPNXA06qJ7"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          paddingLeft: "32px",
          paddingRight: "32px",
          height: "70px",
        }}
      >
        <Link to={`/`}>
          <div
            style={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
            }}
          >
            <img
              src="../../images/logo.png"
              alt=""
              style={{
                height: "40px",
              }}
            />
            <p
              style={{
                fontSize: "26px",
                fontFamily: "Titan One",
              }}
            >
              CozyTurtle
            </p>
          </div>
        </Link>
        <i
          className="fas fa-bars"
          style={{
            fontSize: "32px",
          }}
        ></i>
      </div>
    </div>
  );
};

export default TopNav;
