import React, { Component } from "react";

class GameContainer extends Component {

  // Set the initial state of the score component
  state = {
    score: 0,
    clicked: []
  };

  handleIncrement = (e) => {
    this.props.onPictureClick();
  };

  handleReset = () => {
    this.setState({ score: 0 });
  };

  shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
	}

	return array;

  };

  render () {
    return (
      <div className="container">
      {this.shuffle(this.props.images).map(image => (
        <div 
          role="img" 
          aria-label="click item" 
          className="click-item" 
          key={image.id}
          onClick={this.handleIncrement}
          style={{ backgroundImage: `url(${image.url})`}}>
        </div>
      ))}
      </div>
    );
  }
}

export default GameContainer;
