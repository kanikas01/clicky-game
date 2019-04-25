import React, { Component } from "react";

class GameContainer extends Component {

  handlePictureClick = (e) => {
    this.props.onPictureClick(e);
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
          className={this.props.className} 
          key={image.id}
          data-key={image.id}
          onClick={this.handlePictureClick}
          style={{ backgroundImage: `url(${image.url})`}}>
        </div>
      ))}
      </div>
    );
  }
}

export default GameContainer;
