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
    className: "click-item"
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
          className: "click-item"
        }
      );
      this.checked.push(key);
    } else {
      this.setState(
        { 
          score: 0,
          message: "You chose poorly!",
          className: "click-item shake"
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
          className={this.state.className}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
