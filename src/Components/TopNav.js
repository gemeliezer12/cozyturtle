import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div
      className="z-1 dark color-inherit column align-center"
      style={{
        backgroundColor: "var(--indigo)",
        position: "sticky",
        top: "0",
        color: "var(--text-color-2)",
      }}
    >
      <div
        className="width-100pc row padding-x-32 space-between align-center HPNXA06qJ7"
        style={{
          height: "70px",
        }}
      >
        <Link to={`/`}>
          <div className="row gap-4 align-center">
            <div className="img-40">
              <img src="../../images/logo.png" alt="" />
            </div>
            <p className="ff-titan-one fs-26">CozyTurtle</p>
          </div>
        </Link>
        <i
          className="fas fa-bars fs-32"
          style={{
            color: "var(--text-color-2)",
          }}
        ></i>
      </div>
    </div>
  );
};

export default TopNav;
