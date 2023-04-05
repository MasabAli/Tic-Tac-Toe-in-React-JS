import React, { useState } from 'react';
import Square from './Square';
const NewBoard = () => {
    const [state, setState] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
    const [isXTurn, setIsXTurn] = useState(true);
    const checkWinner = () => {

        const winnerLogic = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]],
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a[0]][a[1]] !== null && state[a[0]][a[1]] === state[b[0]][b[1]] && state[a[0]][a[1]] === state[c[0]][c[1]]) {
                return state[a[0]][a[1]];
            }

        }

        return false;




    };
    const isWinner = checkWinner();
   const handleClick = (index) => {
        let copyState = [...state];
        if (copyState[index[0]][index[1]] === "" &&!isWinner) {
            copyState[index[0]][index[1]] = isXTurn ? 'X' : 'O';

            setState(copyState);
            setIsXTurn(!isXTurn);
        }
   }
    return (
        <div className="board-container">
        {checkWinner() ? <> {isWinner} WON THE GAME </> :
            
                state.map((row, rowIndex) => {
                    return (
                        <div className="board-row">
                            {row.map((col, colIndex) => {
                                return (
                                    <Square onClick={() => handleClick([rowIndex, colIndex])} value={state[rowIndex][colIndex]} />
                                )
                            })}
                        </div>
                    )
                })
            
        }

        </div>

    );

}

export default NewBoard; 