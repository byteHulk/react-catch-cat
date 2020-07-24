import React from 'react';
import className from 'classnames'

import './index.css';


function Circle(props) {
  
  return (
    <div className={className({Circle:true,wall: props.isWall})}></div>
  );
}

export default Circle
