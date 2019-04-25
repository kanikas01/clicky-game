import React, { Component } from "react";
import NavBar from './components/NavBar.js';
import Header from './components/Header.js';
import GameContainer from './components/GameContainer.js';
import Footer from './components/Footer.js';
import images from "./components/images.json";


class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",
    imageClass: "click-item",
    navClass: ""
  };

  componentDidMount = () => {
    this.checked = [];
  };

  playRound = (e) => {
    let key = e.target.getAttribute("data-key");
    if (!this.checked.includes(key)) {
      this.setState(
        { 
          score: this.state.score + 1,
          topScore: this.state.topScore <= this.state.score
            ? this.state.topScore + 1
            : this.state.topScore,
          message: "You chose wisely!",
          imageClass: "click-item",
          navClass: "correct"
        }
      );
      this.checked.push(key);
    } else {
      this.setState(
        { 
          score: 0,
          message: "You chose poorly!",
          imageClass: "click-item shake",
          navClass: "incorrect"
        }
      );

      this.checked = [];  
    }
  };

  render () {
    return (
      <div>
        <NavBar 
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
          className={this.state.navClass}
        />
        <Header />
        <GameContainer 
          images={images}
          onPictureClick={this.playRound}
          className={this.state.imageClass}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
