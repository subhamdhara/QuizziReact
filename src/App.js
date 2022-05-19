import React from "react";
import ReactDOM from 'react-dom';  
import "./App.css";

// function App() {
//   return (
   
//   );
// }

const App = () => (
  <div className="App">
    <header>
      <div className="title">
        <h1>Quizzi</h1>
      </div>
      <div className="top-nav">
        <a href="register" className="btn">
          Register
        </a>
        <a href="login" className="btn">
          Login
        </a>
      </div>
    </header>
    <main>
      <div className="left">
        <h1>Hello!</h1>
        <h2>It's quiz time</h2>
      </div>
    </main>
  </div>
);
export default App
