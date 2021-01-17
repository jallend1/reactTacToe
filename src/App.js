import { useState, useEffect } from 'react';

import './index.css';
import Header from './Components/Header';
import Board from './Components/Board';

const App = () => {
    const [gameStatus, setGameStatus] = useState(Array(9).fill(null));              // Gameboard
    const [isGameOver, setIsGameOver] = useState(false);                            // Game over?
    const [isX, setIsX] = useState(true);                                           // X or O's turn

    const checkVictory = (gameStatus) => {                                        //Compares current board to possible victories
        const victories = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6]
        ];
        victories.forEach(([a, b, c]) => {
            if( gameStatus[a] && 
                gameStatus[b] === gameStatus[a] && 
                gameStatus[c] === gameStatus[a]){
                    setIsGameOver(true);
                }
        });
    }

    const handleClick = cellLocation => {
        if(isGameOver) return;                                      // If game is over, prevents further mucking about
        if(gameStatus[cellLocation] !== null) return;
        const currentStatus = gameStatus.slice();
        isX ? currentStatus[cellLocation] = 'X' : currentStatus[cellLocation] = 'O';
        setIsX(!isX);
        setGameStatus(currentStatus);
    }

    useEffect(() => checkVictory(gameStatus), [gameStatus]);                          // Checks for victory conditions after current board is updated

    return (
        <>
            <Header isGameOver = { isGameOver } />
            <Board gameStatus = {gameStatus} handleClick = {handleClick} />
        </>
    )
}

export default App;