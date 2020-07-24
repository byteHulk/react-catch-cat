import React, { useState, useEffect } from 'react';
import className from 'classnames'

import './index.css';

import Square from '../Circle'
import Cat from '../Cat'


function Board(props) {
    const [w, setW] = useState(Array(props.w).fill(1))
    const [h, setH] = useState(Array(props.h).fill(1))
    // const [wallObj, setWallObj] = useState({})
    // setWallObj([])
    // // setWallObj(randomWall(props.w,props.h))
    console.log(props.wallObj)
    // useEffect(() => {
        
       
    // });


    return (
        <div className="Board">
            <ul className="box">
                {
                    w.map((row, rowIndex) =>
                        <li key={`sq-w-${rowIndex}`} className={className({ 'box-li': true, 'box-li-s': rowIndex % 2 === 1 })}>
                            {
                                h.map((column, columnIndex) => <Square key={`sq-h-${columnIndex}`} isWall={`grid-${rowIndex}-${columnIndex}` in props.wallObj}></Square>)
                            }
                        </li>)
                }
                <Cat></Cat>
            </ul>
        </div>
    );
}


export default Board;
