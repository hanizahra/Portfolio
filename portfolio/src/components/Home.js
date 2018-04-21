import React, { Component } from 'react';
import '../App.css';

class Home extends React.Component {
  render(){
    return(
      <div className='home-parent'>
        <div className='home-child'>
          <h1 className='home-title'><span className='black'>Hello!</span> I'm <span className='black'>Hani Zahra</span>,</h1>
          <h1 className='home-title'>a <span className='black'>Web</span> Developer <span className='black'>/</span></h1>
          <h1 className='home-title'>Audio <span className='black'>Engineer</span>.</h1>
        </div>
      </div>
      );
  };
};

export default Home;
