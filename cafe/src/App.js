import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import Section from './Components/Section'
import Section2 from './Components/Section2'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Carousel/>
        <Section2/>
        <Section/>
        <Footer/>
      </div>
    );
  }
}

export default App;
