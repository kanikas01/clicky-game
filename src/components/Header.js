import React, { Component } from "react";

class Header extends Component {
  render () {
    return (
      <header className="header">
        <h1>Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on an image more than once!</h2>
      </header>
    );
  }
}

export default Header;
