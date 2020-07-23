import React from 'react';
import cat from './cat.gif';
import './index.css';

function Load(props) {
  const loadFun = ()=>{

  }
  return (
    <div className="Load" onClick={()=>{props.history.push('/game')}}>
      <header className="Load-header">
        <img src={cat} className="Load-logo" alt="logo" />
        {/* <p>
          Edit <code>src/Load.js</code> and save to reload.
        </p>
        <a
          className="Load-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default Load;
