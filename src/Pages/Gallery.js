import Masonry from "@mui/lab/Masonry";
import { useNavigate } from "react-router";

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="HPNXA06qJ7"
          style={{
            padding: "60px 32px",
          }}
        >
          <div
            className="dark"
            onClick={() => navigate(-1)}
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "var(--base-color-indigo)",
              borderRadius: "40px",
              cursor: "pointer",
            }}
          >
            <i
              className="fa-solid fa-arrow-left"
              style={{
                fontSize: "20px",
              }}
            ></i>
          </div>
          <div>
            <p
              style={{
                fontSize: "32px",
                fontFamily: "Titan One",
              }}
            >
              Gallery
            </p>
          </div>
          <div
            style={{
              paddingTop: "10px",
            }}
          >
            <p
              style={{
                fontSize: "20px",
              }}
            >
              This is a collection of images of some Web UI stuff I've created
            </p>
          </div>
          <div
            style={{
              paddingTop: "40px",
            }}
          >
            <Masonry
              columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
              spacing={1}
            >
              <img src="../gallery/1.png" alt="" />
            </Masonry>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
