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
      {this.props.images.map(image => (
        <div role="img" aria-label="click item" className="click-item" key={image.id} style={{ backgroundImage: `url(${image.url})`}}></div>
      ))}
      </div>
    );
  }
}

export default GameContainer;
