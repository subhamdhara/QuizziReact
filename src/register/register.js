import React from "react";
import "../App.css";
import api from "../api/persons.js";
import "./register.css";
import axios from "axios";

function Register() {
  function filter(array, value, key) {
    return array.filter(
      key
        ? (a) => a[key] === value
        : (a) => Object.keys(a).some((k) => a[k] === value)
    );
  }
  const [formValue, setformValue] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = document.getElementById("success");
    success.style.display = "none";



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

      axios.get(`/persons`).then((res) => {
        const persons = res.data;
        const emailFilter = filter(persons, dataPer.email, "email");
        const personFilter = filter(emailFilter, dataPer.password, "password");
        const isPresentInQuizzi = () => {
          if (personFilter.length !== 0) {
            return true;
          } else {
            return false;
          }
        };
        if (isPresentInQuizzi()) {
          success.style.display = "block";
          window.location.href = "http://localhost:3000/login";
        } else {
          success.style.display = "none";
        }
      });
      
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


  return (
    <div className="Register">
      <h1>Register</h1>
      <div className="success" id="success" style={{display: "none"}}>Account Created!</div>

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
        
        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
