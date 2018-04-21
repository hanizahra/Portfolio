import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Code from './components/Code';
import Sounds from './components/Sounds';
import Navigation from './navigation/Navigation';
import { slide as Menu } from 'react-burger-menu';


class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Navigation />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/code' component={Code} />
            <Route path='/sounds' component={Sounds} />
          </div>
      </Router>

    );
  }
}

export default App;
