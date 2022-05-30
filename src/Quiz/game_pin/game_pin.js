import "./game_pin.css";
import "../../App.css";
import React from "react";
import Header from "../../components/header/header";
import axios from "axios";

class GamePin extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const UIgamepin = event.target[0].value;
    console.log();
    try {
      axios.get(`/quiz/${UIgamepin}`).then((res) => {
        const quiz = res.data;
        console.log(quiz)
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    // const [formValue, setformValue] = React.useState({
    //   gamepin: "",
    // });

    // const handleSubmit = async (event) => {
    //   // event.preventDefault();

    //   // const dataPer = {
    //   //   // name: formValue.name,
    //   //   gamepin: "",
    //   // };

    //   // const handleChange = (event) => {
    //   //   setformValue({
    //   //     ...formValue,
    //   //     [event.target.name]: event.target.value,
    //   //   });
    //   event.preventDefault()
    // console.log(event.target[0].value)
    // console.log(event.target.elements.username.value)
    // console.log(event.target.username.value)
    // console.log(this.inputNode.value)
    //   };
    return (
      <div className="GamePin">
        <Header />

        <main>
          <h2 className="heading">Gamepin</h2>
          <div className="warning" id="incorrect" style={{ display: "none" }}>
            GamePin incorrect
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              className="underline-input"
              type="gamepin"
              name="gamepin"
              id="gamepin"
              placeholder="gamepin"
              ref={(node) => (this.inputNode = node)}
              maxLength={6}
              // value={formValue.gamepin}
              // onChange={handleChange}
            />
            <input type="submit" value="join" className="btn" />
          </form>
        </main>
      </div>
    );
  }
}
export default GamePin;
