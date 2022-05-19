import React from "react";
import "../App.css";
import api from "../api/persons.js";
import "./register.css";
import axios from "axios";

function Register() {
  const [formValue, setformValue] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataPer = {
      name: formValue.name,
      email: formValue.email,
      password: formValue.password,
    };

    try {
    
      axios
      .post("/persons", dataPer)
      .then(res => console.log(res))
      .catch(err => console.log(err));
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const changePage = () => {
    window.location.href = "http://localhost:3000/login";
  }
  return (
    <div className="Register">
      <h1>Register</h1>
      <div className="triangle"></div>
      <div className="diamond"></div>
      <div className="square"></div>
      <div className="circle"></div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={formValue.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={formValue.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={formValue.password}
          onChange={handleChange}
        />
        
        <button type="submit" className="btn" onClick={changePage}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
