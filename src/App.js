import React, { Component } from 'react';
import './App.css';
import FdcLogo from './Images/image.png';
import Home from './Components/HomeRoute';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
        <div>
          <div className="App-header">
            <img src={FdcLogo} alt="FDC Logo" className="App-logo" />   
          </div>
          <div className="App">
            <Home />
          </div>
          <Footer/>
        </div>
    );
  }
}

export default App;