import React, { useState, useEffect } from 'react';
import className from 'classnames'

import './index.css';

import Square from '../Circle'
import Cat from '../Cat'


function Board(props) {
    const [wallArr, setWallArr] = useState([])
    const [catPos,setCatPos] = useState([6,6])

    useEffect(_ => {
        let arr = Array(props.w).fill(1).map(_ => Array(props.h).fill(false))
        for (let k = 0; k < 8; k++) {

            let i = Math.floor(props.w * Math.random());
            let j = Math.floor(props.h * Math.random());

            if (i !== 5 || j !== 5) {
                arr[i][j]= true
            }
        }
        setWallArr(arr)

    }, [])


    const addWall = (i,j)=>{
        let arr = JSON.parse(JSON.stringify(wallArr))
        arr[i][j] = true
        setWallArr(arr)

    }
    

    return (
        <div className="Board">
            <ul className="box">
                {
                    wallArr.map((row, rowIndex) =>
                        <li key={`sq-w-${rowIndex}`} className={className({ 'box-li': true, 'box-li-s': rowIndex % 2 === 1 })}>
                            {
                                row.map((column, columnIndex) => <Square id={`sq-${rowIndex}-${columnIndex}`} key={`sq-${rowIndex}-${columnIndex}`} isWall={wallArr[rowIndex][columnIndex]} event={()=>addWall(rowIndex,columnIndex)}></Square>)
                            }
                        </li>)
                }
                <Cat catPos={catPos}></Cat>
            </ul>
        </div>
    );
}


export default Board;
