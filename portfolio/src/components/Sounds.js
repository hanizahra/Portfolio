import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import '../App.css';

class Sounds extends React.Component {
  render(){
    return(
      <div>
        <div className='parent-sounds'>
          <div id='top-sound' className='child-sounds'>
            <ReactPlayer
              url='https://soundcloud.com/machetesisters/the-new-vixens-the-endangered-go-sailing'
              playing={false}
            />
          </div>
          <div className='child-sounds'>
            <ReactPlayer
              url='https://soundcloud.com/machetesisters/vile-bodies-fake-it-til-you-break-it-01-peculiar-agony'
              playing={false}
            />
          </div>
          <div className='child-sounds'>
            <ReactPlayer
              url='https://soundcloud.com/machetesisters/the-junky-trash-can-kids-the-meaning'
              playing={false}
            />
          </div>
          <div className='child-sounds'>
            <ReactPlayer
              url='https://soundcloud.com/machetesisters/the-junky-trash-can-kids-when-can-i-leave'
              playing={false}
            />
          </div>
          <div className='child-sounds'>
            <ReactPlayer
              url='https://soundcloud.com/machetesisters/carl-creighton-old-man-becomes-you'
              playing={false}
            />
          </div>
        </div>
      </div>
      );
  };
};

export default Sounds;

