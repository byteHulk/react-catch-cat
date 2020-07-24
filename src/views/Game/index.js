import React from 'react';
import './index.css';

import Head from '../../components/Head'
import Board from '../../components/Board'

function Game(props) {
  return (
    <div className="Game">
      <Head title="title"></Head>
      <Board></Board>
    </div>
  );
}

export default Game;
