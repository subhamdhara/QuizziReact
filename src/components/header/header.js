import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <header>
          <div className="title">
            <h1>Quizzi</h1>
          </div>
          <div className="top-nav">
            {this.props.dataFromParent}
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
  }
}
export default Header;
