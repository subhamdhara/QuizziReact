import ReactDOM from "react-dom";
import "../App.css"
import "./home.css";
import React from "react";
// import Login from "../login/login";
import Header from "../components/header/header";
import "../components/header/header.css";

// function Home() {
//   return (

//   );
// }

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Header />

        <main>
          <h2 className="heading">Quiz</h2>
          <div className="quiz-attend-make">
            <a href="/join" className="btn">
              Join Quiz
            </a>
            <a href="/make-quiz" className="btn">
              Make Quiz
            </a>
          </div>
        </main>
      </div>
    );
  }
}
export default Home;
