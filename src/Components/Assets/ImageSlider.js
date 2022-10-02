import { useState } from "react";
import styles from "./ImageSlider.module.css";

const ImageSlider = ({ images }) => {
  const [image, setimage] = useState(0);
  const [prevImage, setprevImage] = useState(0);
  const [direction, setdirection] = useState("");
  const [sliding, setsliding] = useState(false);

  const fixArrayIndex = (array, index) => {
    if (array.length <= index) {
      return 0;
    } else if (0 > index) {
      return array.length - 1;
    } else return index;
  };

  const changeImage = (e) => {
    if (image === e) {
      setdirection("");
    } else {
      setdirection(e < image ? "left" : "right");
      setsliding(!sliding);
      e = fixArrayIndex(images, e);

      setimage(e);
      setprevImage(image);
    }
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          aspectRatio: "16/9",
          position: "relative",
        }}
      >
        <div className={styles.next}>
          <button
            className={styles.directionIconContainer}
            onClick={() => changeImage(image - 1)}
          >
            <div className={styles.icon}></div>
          </button>
        </div>
        <div className={styles.back}>
          <button
            className={styles.directionIconContainer}
            onClick={() => changeImage(image + 1)}
          >
            <div
              className={styles.icon}
              style={{
                transform: "rotateZ(180deg)",
              }}
            ></div>
          </button>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {sliding ? (
            <>
              <img
                className={`${styles.image} ${styles.prev} ${styles[direction]}`}
                src={`../images/${images[prevImage]}`}
                alt=""
              />
              <img
                className={`${styles.image} ${styles.current} ${styles[direction]}`}
                src={`../images/${images[image]}`}
                alt=""
              />
            </>
          ) : (
            <>
              <img
                className={`${styles.image} ${styles.current} ${styles[direction]}`}
                src={`../images/${images[image]}`}
                alt=""
              />
              <img
                className={`${styles.image} ${styles.prev} ${styles[direction]}`}
                src={`../images/${images[prevImage]}`}
                alt=""
              />
            </>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {images.map((i, index) => (
          <div
            className={`${styles.sliderOptionContainer} ${
              index === image ? styles.active : ""
            }`}
            key={index}
            onClick={() => changeImage(index)}
          >
            <div className={styles.sliderOption} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
