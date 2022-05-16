import React from "react";
import './App.css';
import Login from './login/login.js';


function App() {
  return (
    <div className="App">
      <header>
        <div className="title">
            <h1>Quizzi</h1>
        </div>
        <div class="top-nav">
            <a href="register/register.html" className="btn">
                Register
            </a>
            <a  href="login" className="btn">
                Login
            </a >
            
        </div>
    </header>
    <main>
        <div className="left">
            <h1>
                Hello!
            </h1>
            <h2>
                It's quiz time
            </h2>
        </div>
        <div classN ame="right">
            <a href="register/register.js" class="btn">
                Register
            </a>
            <a href="login/login.js" class="btn">
                Login
            </a>
        </div>
    </main>
    </div>
  );
}

export default App;

