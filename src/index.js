import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Login from "./login/login.js";
import Register from "./register/register";
import Home from "./home/home";
import {BrowserRouter,  Route, Routes} from "react-router-dom";
import MakeQuiz from "./make-quiz/make-quiz";
import GamePin from "./Quiz/game_pin/game_pin";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/make-quiz" element={<MakeQuiz/>}/>
      <Route path="/join" element={<GamePin/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
