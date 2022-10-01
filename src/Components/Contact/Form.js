import Input from "../Assets/Input";
import Textarea from "../Assets/Textarea";

const Form = ({ inputs, onChange, allInputIsValid, onSubmit }) => {
  return (
    <form
      onChange={(e) => onChange(e.target)}
      onSubmit={(e) => onSubmit(e)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Input input={inputs.name} />
        <Input input={inputs.email} />
        <Textarea input={inputs.message} />
      </div>
      <div>
        {allInputIsValid() ? (
          <button
            className="dark"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 25px",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: "900",
              color: "var(--text-color-1)",
              backgroundColor: "var(--base-color-indigo)",
            }}
          >
            <p>Send</p>
          </button>
        ) : (
          <button
            className="solid-btn fs-14 disabled dark"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 25px",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: "900",
              cursor: "not-allowed",
              color: "var(--text-color-1)",
              backgroundColor: "rgba(150, 150, 150)",
            }}
          >
            <p>Send</p>
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
