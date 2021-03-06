import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.css';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Works from '../components/Works/Works';
import Footer from '../components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home name = 'Solomon Igori'/>
        <About />
        <Works />
        <Footer />
      </div>
    );
  }
}

export default App;
