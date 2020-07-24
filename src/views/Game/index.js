import React from 'react';
import './index.css';

import Head from '../../components/Head'
import Board from '../../components/Board'

const randomWall = (w, h) => {
  let obj = {}
  for (let k = 0; k < 8; k++) {

      let i = Math.floor(w * Math.random());
      let j = Math.floor(h * Math.random());

      if (i !== 5 || j !== 5) {
          obj[`grid-${i}-${j}`] = true
      }
  }
  return obj
}

function Game(props) {
  return (
    <div className="Game">
      <Head title="title"></Head>
      <Board w={11} h={11} wallObj={randomWall(11,11)}></Board>
    </div>
  );
}

export default Game;
