import React, { Component } from "react";
import NavBar from './components/NavBar.js';
import Header from './components/Header.js';
import GameContainer from './components/GameContainer.js';
import Footer from './components/Footer.js';
import images from "./components/images.json";


class App extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <Header />
        <GameContainer images={images}/>
        <Footer />
      </div>
    );
  }
}

export default App;
