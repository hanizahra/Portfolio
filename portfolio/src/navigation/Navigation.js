import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from '../components/About';
import Home from '../components/Home';
import Code from '../components/Code';
import Sounds from '../components/Sounds';
import { slide as Menu } from 'react-burger-menu';
import TiIconPack from 'react-icons/lib/ti';
import GoIconPack from 'react-icons/lib/go';
import { TiSocialTwitter, TiMail, TiSocialGithubCircular, TiSocialInstagram } from 'react-icons/lib/ti';




class Navigation extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
        <Menu burgerBarClassName={ "burger-bars-class" } className='sidebar'>
            <a id="home" className="menu-item" href="/"><span className='hover-effect'>Home</span></a>{<hr/>}
            <a id="about" className="menu-item" href="/about">About</a>{<hr/>}
            <a id="code" className="menu-item" href="/code">Code</a>{<hr/>}
            <a id="sounds" className="menu-item" href="/sounds">Sounds</a>
            <div className="bottom-item">
              <a id="mail" href="mailto:hanizahra@gmail.com"><span className='bottom-icons'><TiMail /></span><span className='social-text'>hanizahra@gmail.com</span></a>{<hr/>}
              <a id="github" href="https://github.com/hanizahra"><span className='bottom-icons'><TiSocialGithubCircular /></span><span className='social-text'>hanizahra</span></a>{<hr/>}
              <a id="instagram" href="https://www.instagram.com/machetesisters/"><span className='bottom-icons'><TiSocialInstagram /></span><span className='social-text'>machetesisters</span></a>{<hr/>}
              <a id="twitter" href="https://twitter.com/hanizahra?lang=en"><span className='bottom-icons'><TiSocialTwitter /></span><span className='social-text'>@hanizahra</span></a>
            </div>
        </Menu>
    );
  }
}


export default Navigation;
