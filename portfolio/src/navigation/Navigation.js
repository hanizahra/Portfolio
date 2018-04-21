import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from '../components/About';
import Home from '../components/Home';
import Code from '../components/Code';
import Sounds from '../components/Sounds';
import { slide as Menu } from 'react-burger-menu';

class Navigation extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
        <Menu className='sidebar'>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="code" className="menu-item" href="/code">Code</a>
          <a id="sounds" className="menu-item" href="/sounds">Sounds</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
    );
  }
}


export default Navigation;
