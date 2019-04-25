import React, { Component } from "react";
import NavBar from './components/NavBar.js';
import Header from './components/Header.js';
import GameContainer from './components/GameContainer.js';
import Footer from './components/Footer.js';
import images from "./components/images.json";


class App extends Component {

  state = {
    score: 0
  };

  playRound = () => {
    this.setState({ score: this.state.score + 1 });
  };

  render () {
    const score = this.state.score;
    const topScore = this.state.score;
    return (
      <div>
        <NavBar 
          score={score}
          topScore={topScore}
        />
        <Header />
        <GameContainer 
          images={images}
          score={score}
          onPictureClick={this.playRound}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
