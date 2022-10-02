import TextareaAutosize from "react-textarea-autosize";
import styles from "./Textarea.module.css";

const Input = ({ input }) => {
  return (
    <div
      className={`${styles.inputLabel} ${
        input.value !== "" ? styles["focus-within"] : ""
      } ${
        input.value === "" ? "" : input.isValid ? styles.valid : styles.invalid
      }`}
    >
      {input.isRequired ? (
        <div>
          <label htmlFor={input.name} className={styles.label}>
            {input.label}
            <span
              style={{
                color: "var(--base-color-rose)",
              }}
            >
              *
            </span>
          </label>
          <TextareaAutosize name={input.name} required />
        </div>
      ) : (
        <div>
          <label htmlFor={input.name} className={styles.label}>
            {input.label}
          </label>
          <TextareaAutosize name={input.name} />
        </div>
      )}
    </div>
  );
};

export default Input;
