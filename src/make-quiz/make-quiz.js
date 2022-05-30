import ReactDOM from "react-dom";
import "./make-quiz.css";
import "../App.css";
import React from "react";
import Header from "../components/header/header";

class MakeQuiz extends React.Component {
  render() {
    const remove_us = () => {
      document.getElementById("type").remove()
    }
    const onCasual = () => {
      document.getElementById("type").remove()
    }
    
    return (
      <div className="MakeQuiz">
        <Header />

        <main>
          <h2 className="heading">Quiz Maker</h2>
          <ul className="drop-down" id="type">
            <li>
              <p>
                type of quiz <i className="drop"></i>
              </p>
              <ul>
                <li>
                  <button onClick={remove_us} id="casual">Casual Quiz</button>
                </li>
                <li>
                  <button onClick={remove_us} id="edcate">Educational Quiz</button>
                </li>
              </ul>
            </li>
          </ul> 
        </main>
      </div>
    );
  }
}
export default MakeQuiz;
