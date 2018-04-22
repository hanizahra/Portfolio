import React, { Component } from 'react';
import '../App.css';

class About extends React.Component {
  render(){
    return(
      <div>
        <h1 className='page-title'>All About Me</h1>
        <div className='page-container'>
          <div classname='body-text'>
            <p className='descript'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet at lectus eu consequat. Sed varius nibh ac sapien porttitor viverra. Cras quis sollicitudin justo, at imperdiet erat. Sed viverra lacus magna, quis placerat est aliquet sit amet. Curabitur purus neque, pharetra vitae tortor sit amet, suscipit rhoncus magna. Nulla ante ex, elementum facilisis hendrerit id, dignissim eu tellus. Sed ac convallis tortor. Quisque consectetur, tortor id congue varius, arcu erat maximus erat, at rhoncus purus urna ac lacus. Sed a orci at elit suscipit accumsan vitae et mi. Nulla facilisi. Integer ultricies metus sed turpis bibendum pretium. Sed viverra, mi vel vehicula scelerisque, erat urna commodo mi, ac vulputate nisi ligula pulvinar sapien. Aliquam pellentesque suscipit lacus, ut malesuada mi luctus ac. Vestibulum iaculis mi a mi rutrum ultrices. Donec iaculis mi et aliquam volutpat.</p>
            <p className='descript'>Quisque sed justo eget justo pellentesque fermentum sed vel arcu. Vivamus ac quam lacus. Pellentesque pharetra massa sapien, ac mollis ligula porta quis. Suspendisse imperdiet mauris non ligula molestie, ut lobortis quam ultrices. Integer rhoncus vehicula dolor, bibendum rutrum purus pellentesque in. Etiam ac facilisis ante. Cras non nibh ac felis egestas iaculis. Aliquam tincidunt erat orci, sit amet malesuada leo placerat eu. In consectetur enim ut libero viverra, ut pretium augue imperdiet. Phasellus laoreet ullamcorper eleifend. Vivamus dapibus sodales sapien, ac eleifend eros tempus vel. Duis id auctor nisl. Mauris imperdiet eget ante ac varius. Vivamus gravida ante risus, sed rutrum ante tristique nec. Nullam sodales dolor sed nunc cursus, ac imperdiet est vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
        </div>
      </div>
      );
  };
};

export default About;
