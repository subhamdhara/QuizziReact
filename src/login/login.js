import React from "react";
import "../App.css";
// import Home from "../home/home";
import "./login.css";
import axios from "axios";

function Login() {

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
    const warning = document.getElementById("incorrect");

    const dataPer = {
      // name: formValue.name,
      email: formValue.email,
      password: formValue.password,
    };
      

    try {
      axios.get(`/persons`).then((res) => {
        const persons = res.data;
        const emailFilter = filter(persons, dataPer.email, "email");
        const personFilter = filter(emailFilter, dataPer.password, "password");
        const isAuthorized = () => {
          if (personFilter.length !== 0) {
            return true;
          } else {
            return false;
          }
        };
        if (isAuthorized()) {
          warning.style.display = "none";
          window.location.href = "http://localhost:3000/home";
          localStorage.setItem('dataKey', JSON.stringify(personFilter));

        } else {
          warning.style.display = "block";
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
    <div className="Login">
      <h1>Login</h1>

      <div className="triangle"></div>
      <div className="diamond"></div>
      <div className="square"></div>
      <div className="circle"></div>
      <div className="warning" id="incorrect" style={{display: "none"}}>
        Email or password incorrect!
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="underline-input"
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={formValue.email}
          onChange={handleChange}
        />
        <input
          className="underline-input"
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={formValue.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
  
}

export default Login;
