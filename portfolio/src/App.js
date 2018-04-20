import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Pieces from './components/Pieces';
import Sounds from './components/Sounds';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Hani Portfolio under construction</h1>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/pieces' component={Pieces} />
          <Route path='/sounds' component={Sounds} />
        </div>
      </Router>
    );
  }
}

export default App;
