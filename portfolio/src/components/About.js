import React, { Component } from 'react';
import '../App.css';

class About extends React.Component {
  render(){
    return(
      <div>
        <p>&nbsp;</p>
        <h1 className='page-title1'>All About Me</h1>
        <div className='page-container'>
          <div classname='body-text'>
            <p className='descript-bio'>I spent half my life growing up in Nebraska, playing guitar to Zeppelin and Floyd records, and playing in bands. After graduating high school, I pursued a music theory degree at ASU and spent the next five years discovering composition and recording. By that point, I was following the music wherever it would take me, circling over to Nashville for a year, then finally settling down in Brooklyn.  </p>
            <p className='descript-bio'>Up until Thanksgiving of 2017, my focus had been entirely on audio engineering, production, and musical experimentation. Since then I've dedicated every waking moment to coding, building web apps, and learning new programming languages. The more I learn, the more empowered I feel. It's exciting to me that in this industry, there's great potential to make something or be a part of something that could have a real and lasting impact on humanity.</p>
          </div>
        </div>
      </div>
      );
  };
};

export default About;
