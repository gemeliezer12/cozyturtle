import { useNavigate } from "react-router";
import { useState } from "react";
import Form from "../Components/Contact/Form";
import emailjs from "emailjs-com";
import Header from "../Components/Contact/Header";

const Contact = () => {
  const [name, setName] = useState({
    name: "name",
    label: "Name",
    value: "",
    type: "text",
    isValid: false,
    isRequired: true,
  });
  const [email, setEmail] = useState({
    name: "email",
    label: "Email",
    value: "",
    type: "email",
    isValid: false,
    isRequired: true,
  });
  const [message, setMessage] = useState({
    name: "message",
    label: "Message",
    value: "",
    isValid: false,
    isRequired: true,
  });
  const formInput = { name: name, email: email, message: message };

  const navigate = useNavigate();

  const formHandler = (e) => {
    switch (e.name) {
      case "name":
        setName((prevState) => ({
          ...prevState,
          value: e.value,
          isValid: e.value.length >= 3,
        }));
        break;
      case "email":
        setEmail((prevState) => ({
          ...prevState,
          value: e.value,
          isValid: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.value),
        }));
        break;
      case "message":
        setMessage((prevState) => ({
          ...prevState,
          value: e.value,
          isValid: e.value.length >= 10,
        }));
        break;
      default:
        break;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_ykt4iwo",
        "template_9inqpz5",
        e.target,
        "user_qtHLBg5UgUqF5lohFFNIh"
      );
      e.target.reset();
      clearAllInput();
    } catch (err) {
      console.log(err);
    }
  };

  const allInputIsValid = () => {
    return name.isValid && email.isValid && message.isValid;
  };

  const clearAllInput = () => {
    setName((prevState) => ({ ...prevState, value: "", isValid: false }));
    setEmail((prevState) => ({ ...prevState, value: "", isValid: false }));
    setMessage((prevState) => ({ ...prevState, value: "", isValid: false }));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="I1LR7ekFaW"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "80px 32px",
            backgroundColor: "var(--bg-color-2)",
          }}
        >
          <Header />
          <Form
            inputs={formInput}
            onChange={formHandler}
            allInputIsValid={allInputIsValid}
            onSubmit={sendEmail}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="dark"
              onClick={() => navigate(-1)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 15px",
                borderRadius: "4px",
                fontSize: "10px",
                fontWeight: "900",
                color: "var(--text-color-1)",
                backgroundColor: "var(--base-color-rose)",
                cursor: "pointer",
              }}
            >
              <p>Cancel</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
