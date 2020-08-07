import React,{useEffect} from 'react';
import className from 'classnames'

import './index.css';


function Circle(props) {
  
  return (
    <div id={props.id} className={className({Circle:true,wall: props.isWall})} onClick={()=>props.event()}></div>
  );
}

export default Circle
