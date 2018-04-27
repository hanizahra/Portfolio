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
              <div className='project-images'>
                <a href='https://github.com/hanizahra/Tinderless-Frontend'>
                  <Image className='single-image1' src="/testimage.png" responsive />
                  <Image className='single-image1' src="/swiping.gif" responsive />
                </a>
              </div>
              <p className='descript'>Users swipe for matches currently located at their address</p>
              <p className='tech'><b>Tech:</b> React Native/Geolocation/Google APIs/{<br />}Node+Express/PostgreSQL</p>
            </div>
          </div>
          <div className='project-pieces'>
            <h2><a href='https://github.com/hanizahra/House-Party-III'>House Party III</a></h2>
            <div className='pieces-text'>
              <div className='project-images'>
                <a href='https://github.com/hanizahra/House-Party-III'>
                  <Image className='single-image' src="/house-party-iii.gif" responsive />
                </a>
              </div>
              <p className='descript'>Users can list and request invites to parties</p>
              <p className='tech'><b>Tech:</b> Python+Django/Bootstrap 4</p>
            </div>
          </div>
          <div className='project-pieces'>
            <h2><a href='https://github.com/hanizahra/Reddit-Joke-Book'>Reddit JokeBook</a></h2>
            <div className='pieces-text'>
              <div className='project-images'>
                <a href='https://github.com/hanizahra/Reddit-Joke-Book'>
                  <Image className='single-image' src="/jokebook2.png" responsive />
                </a>
              </div>
              <p className='descript'>Random generator of most upvoted knock knock jokes</p>
              <p className='tech'><b>Tech:</b> Ruby on Rails/Bootstrap 4</p>
            </div>
          </div>
          <div className='project-pieces'>
            <h2><a href='https://github.com/hanizahra/Petsy'>Petsy</a></h2>
            <div className='pieces-text'>
              <div className='project-images'>
                <a href='https://github.com/hanizahra/Petsy'>
                  <Image className='single-image' src="/petsy.gif" responsive />
                </a>
              </div>
              <p className='descript'>A pet finder for rescue animals</p>
              <p className='tech'><b>Tech:</b> React JS/Node+Express/PostgreSQL/Bootstrap3</p>
            </div>
          </div>
          <div className='project-pieces'>
            <h2><a href='https://github.com/hanizahra/Building-311'>Building 311</a></h2>
            <div className='pieces-text'>
              <div className='project-images'>
                <a href='https://github.com/hanizahra/Building-311'>
                  <Image className='single-image' src="/building-311.gif" responsive />
                </a>
              </div>
              <p className='descript'>Violations and Complaints for buildings/apartments in New York</p>
              <p className='tech'><b>Tech:</b> Web scraper(Cheerio)/Node+Express/{<br />}EJS/PostgreSQL/Bootstrap 4</p>
            </div>
          </div>
          <div className='project-pieces'>
            <h2><a href='https://github.com/hanizahra/Ms-Pacman'>Ms. PacMan</a></h2>
            <div className='pieces-text'>
              <div className='project-images'>
                <a href='https://github.com/hanizahra/Ms-Pacman'>
                  <Image className='single-image' src="/ms-pac-man.gif" responsive />
                </a>
              </div>
              <p className='descript'>A browser-based 80's arcade game, Ms. PacMan</p>
              <p className='tech'><b>Tech:</b> JavaScript/Illustrator</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      );
  };
};

export default Code;
