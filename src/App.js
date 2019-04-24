import React from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Header from './Header.js';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <main className="container">
        Content
      </main>
      <Footer />
    </div>
  );
}

export default App;
