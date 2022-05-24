import ReactDOM from "react-dom";
import "./home.css";
import React from "react";
// import Login from "../login/login";
import Header from "../components/header/header";

// function Home() {
//   return (

//   );
// }

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Header dataFromParent= {window.name} />
        <main>
          <div className="left">
            <h1>Hello!</h1>
            <h2>It's quiz time</h2>
          </div>
        </main>
      </div>
    );
  }
}
export default Home;
