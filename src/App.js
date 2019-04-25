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
    message: "Click an image to begin!"
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
          message: "You guessed correctly!" 
        }
      );
      this.checked.push(key);
    } else {
      alert("you lose")
      this.setState(
        { 
          score: 0,
          message: "You guessed incorrectly!" 
        }
      );
      this.checked = [];
    }
    
    console.log(this.checked);
  };

  render () {
    return (
      <div>
        <NavBar 
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        <GameContainer 
          images={images}
          onPictureClick={this.playRound}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
