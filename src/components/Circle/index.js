import React from 'react';
import className from 'classnames'

import './index.css';


function Circle(props) {
  console.log(props)
  return (
    <div className={className({Circle:true,dark: props.styleType})}></div>
  );
}

export default Circle
