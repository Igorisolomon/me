import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.css';
import Home from '../components/home/home';
import About from '../components/about/about';
import Works from '../components/works/works';
import Footer from '../components/footer/footer';


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
