import React, { Component } from 'react';
import AutoFitImage from 'react-image-autofit-frame';
import { Image } from 'react-bootstrap';
import '../App.css';

class Code extends React.Component {
  render(){
    return(
      <div>
      <div>
      <p>&nbsp;</p>
        <div className='project-container'>
          <div className='project-pieces'>
            <h2><a href='https://github.com/hanizahra/Tinderless-Frontend'>Tinderless</a></h2>
            <div className='pieces-text'>
              <p>A Tinder-esque ios app where users swipe for matches currently located at their address</p>
              <div className='project-images'>
                <Image className='single-image' src="/testimage.png" responsive />
                <Image className='single-image' src="/swiping.gif" responsive />
              </div>
              <p><b>Tech:</b> React Native/Geolocation/Google APIs(Geocode+Place Details)/Node+Express/PostgreSQL</p>
            </div>
          </div>
          <div className='project-pieces'>
            <h2><a href='https://github.com/hanizahra/House-Party-III'>House Party III</a></h2>
            <div className='pieces-text'>
              <p>A party listing community where people can create profiles and request party invitations</p>
              <div className='project-images'>
                <Image className='single-image' src="/house-party-iii.gif" responsive />
              </div>
              <p><b>Tech:</b> Python+Django/Bootstrap 4</p>
            </div>
          </div>
          <div className='project-pieces'>
            <h2><a href='https://github.com/hanizahra/Reddit-Joke-Book'>Reddit JokeBook</a></h2>
            <div className='pieces-text'>
              <p>Generator of highest upvoted knock knock jokes on select Reddit subreddits</p>
              <div className='project-images'>
                <Image className='single-image' src="/jokebook2.png" responsive />
              </div>
              <p><b>Tech:</b> Ruby on Rails/Bootstrap 4</p>
            </div>
          </div>
          <div className='project-pieces'>
            <h2><a href='https://github.com/hanizahra/Petsy'>Petsy</a></h2>
            <div className='pieces-text'>
              <p>A pet finder for rescue animals</p>
              <div className='project-images'>
                <Image className='single-image' src="/petsy.gif" responsive />
              </div>
              <p><b>Tech:</b> React JS/Node+Express/PostgreSQL/Bootstrap3</p>
            </div>
          </div>
          <div className='project-pieces'>
            <h2><a href='https://github.com/hanizahra/Building-311'>Building 311</a></h2>
            <div className='pieces-text'>
              <p>A violation and complaint lookup for buildings/apartments in New York</p>
              <div className='project-images'>
                <Image className='single-image' src="/building-311.gif" responsive />
              </div>
              <p><b>Tech:</b> Web scraper(Cheerio)/Node+Express/EJS/PostgreSQL/Bootstrap 4</p>
            </div>
          </div>
          <div className='project-pieces'>
            <h2><a href='https://github.com/hanizahra/Ms-Pacman'>Ms. PacMan</a></h2>
            <div className='pieces-text'>
              <p>A browser-based game based on the classic 80's arcade game, Ms. PacMan</p>
              <div className='project-images'>
                <Image className='single-image' src="/ms-pac-man.gif" responsive />
              </div>
              <p><b>Tech:</b> JavaScript/Illustrator</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      );
  };
};

export default Code;
