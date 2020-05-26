import React, { Component } from 'react';
import Navbar from './components/Navbar'
import {  Route, BrowserRouter } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}




export default App;