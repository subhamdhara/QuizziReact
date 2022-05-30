import ReactDOM from "react-dom";
import "./make-quiz.css";
import "../App.css";
import React from "react";
import Header from "../components/header/header";

class MakeQuiz extends React.Component {
  render() {
    const remove_us = () => {
      document.getElementById("type").remove();
    };
    return (
      <div className="MakeQuiz">
        <Header />

        <main>
          <h2 className="heading">Quiz</h2>
        </main>
      </div>
    );
  }
}
export default MakeQuiz;
