import React from 'react';
import className from 'classnames'

import './index.css';

import Square from '../Circle'

function Board(props) {
    let state = {
        w: Array(11).fill(1),
        h: Array(11).fill(1)
    }
    console.log(state.w)

    return (
        <div className="Board">
            <ul className="box">
                {
                    state.w.map((e, i) =>
                        <li key={`sq-w-${i}`} className={className({'box-li':true,'box-li-s':i%2 === 1})}>
                            {
                                state.h.map((e, i) => <Square key={`sq-h-${i}`} styleType = {i%2 === 0}></Square>)
                            }
                        </li>)
                }
            </ul>
        </div>
    );
}

export default Board;
