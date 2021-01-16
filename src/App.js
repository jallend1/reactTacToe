import { useState } from 'react';

import './index.css';
import Board from './Components/Board'

const App = () => {
    const [isGameOver, setIsGameOver] = useState(false);                // Game over?
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
    return (
        <>
            <h1>React Tac Toe</h1>
            <h2>Is the game over? {isGameOver ? <h2>Yes!</h2> : <h2>No!</h2>}</h2>
            <Board isGameOver={isGameOver} checkVictory={checkVictory}/>
        </>
    )
}

export default App;