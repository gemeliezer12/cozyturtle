import styles from "./Input.module.css";

const Input = ({ input }) => {
  return (
    <div
      className={`${styles.inputLabel} ${
        input.value !== "" && styles["focus-within"]
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
          <input required name={input.name} type={input.type} />
        </div>
      ) : (
        <div>
          <label htmlFor={input.name} className={styles.label}>
            {input.label}
          </label>
          <input name={input.name} type={input.type} />
        </div>
      )}
    </div>
  );
};

export default Input;
