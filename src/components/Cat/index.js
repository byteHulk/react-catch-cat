import React,{useEffect} from 'react';

import './index.css';

function Cat(props) {
  let getCatPos = _=>{
    let [i,j] = props.catPos
    let ele = document.getElementById('sq-6-6')

    console.log(ele)
  }
  useEffect(_=>{
    getCatPos()
  },[])
  return (
    <div className="Cat"></div>
  );
}

export default Cat
