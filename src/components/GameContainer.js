import React, { Component } from "react";

class GameContainer extends Component {

  // Set the initial state of the score component
  state = {
    score: 0,
    clicked: []
  };

  handleIncrement = () => {
    this.setState({ count: this.state.score + 1 });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render () {
    return (
      <div className="container">
        <h1>YO</h1>
      </div>
    );
  }
}

export default GameContainer;