import React from "react";
import { useState } from "react";
import form from "./css/Form.module.css";
import validations from "./validations";
const Form = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validations({ ...errors, [event.target.name]: event.target.value }),
    );
  };

  const handleSubmit = () => {
    props.login(userData);
  };

  return (
    <>
      <div className={form.container}>
        <form onSubmit={handleSubmit}>
          <div className={form.Logo}></div>
          <br />
          <label>Username</label>
          <br />
          <input
            name="username"
            type="email"
            onChange={handleInputChange}
            value={userData.username}
          ></input>

          <br />
          <label>Password</label>
          <br />
          <input
            name="password"
            type="password"
            onChange={handleInputChange}
            value={userData.password}
          ></input>

          <button type="submit">submit</button>
        </form>
      </div>
      <p>
        username = example@gmail.com <br />
        password = 123456rick
      </p>
    </>
  );
};
export default Form;
