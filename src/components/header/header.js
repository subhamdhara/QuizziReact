import React from "react";
import "../../App.css";
import "./header.css";
import ReactDOM from "react-dom";

class Header extends React.Component {
  // {this.props.name}, {this.props.email}, {this.props.password} 

  render() {

    const val = JSON.parse(localStorage.getItem("dataKey"))[0];
    const log_out = () => {
      localStorage.clear()
    }
    return (
      <div className="Header">
        <header>
          <div className="title">
            <h1>Quizzi</h1>
          </div>
          <div className="top-nav">
            <ul>
              <li>
                <p>{val.name}<i className="drop"></i></p>
                <ul>
                  <li><a href="#">Change Credentials</a></li>
                  <li><a href="/" onClick={log_out}>Log Out</a></li>
                </ul>
                
              </li>
            </ul>
          </div>
        </header>
        
      </div>
    );
  }
}
export default Header;
