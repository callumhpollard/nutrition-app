import React, { useState } from "react";
import "./styles.scss";
import axios from "axios";
import Button from "../components/Button";

const PORT = process.env.PORT || 8008;

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`${PORT}`);
    /* now we want to setUser from app */
    console.log("inputs:", inputs);
    axios
      .put(`/register`, inputs)
      .then(() => console.log("shit sent"))
      .catch((error) => console.log(error));
  }

  return (
    <form onSubmit={handleSubmit} className="registerform">
      {/* <input
        placeholder="avatar"
        name="avatar"
        value={inputs.avatar}
        onChange={handleInputChange}
      /> */}
      <input
        placeholder="username"
        name="username"
        value={inputs.username}
        onChange={handleInputChange}
      />
      <input
        placeholder="first name"
        name="first_name"
        value={inputs.first_name}
        onChange={handleInputChange}
      />
      <input
        placeholder="last name"
        name="last_name"
        value={inputs.last_name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={inputs.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={inputs.password}
        onChange={handleInputChange}
      />

      <Button register type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Register;
