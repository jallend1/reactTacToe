import { useState, useEffect } from 'react';
import Square from  './Square';

const Board = () => {
    
    const [gameStatus, setGameStatus] = useState(Array(9).fill(null));  // Gameboard
    const [isX, setIsX] = useState(true);                               // X or O's turn
    const [isGameOver, setIsGameOver] = useState(false);                // Game over?
    
    const checkVictory = () => {                                        //Compares current board to possible victories
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
        const currentStatus = gameStatus.slice();
        isX ? currentStatus[cellLocation] = 'X' : currentStatus[cellLocation] = 'O';
        setIsX(!isX);
        setGameStatus(currentStatus);
    }

    useEffect(checkVictory, [gameStatus]);                          // Checks for victory conditions after current board is updated

    return (
    <>
        <header>
            <p>Is the game over? {isGameOver ? 'Yes!' : 'No'}</p>
        </header>
        <div className="row">
            <Square cellLocation={0} val={gameStatus[0]} onClick={handleClick}/>
            <Square cellLocation={1} val={gameStatus[1]} onClick={handleClick}/>
            <Square cellLocation={2} val={gameStatus[2]} onClick={handleClick}/>
        </div>
        <div className="row">
            <Square cellLocation={3} val={gameStatus[3]} onClick={handleClick}/>
            <Square cellLocation={4} val={gameStatus[4]} onClick={handleClick}/>
            <Square cellLocation={5} val={gameStatus[5]} onClick={handleClick}/>
        </div>
        <div className="row">
            <Square cellLocation={6} val={gameStatus[6]} onClick={handleClick}/>
            <Square cellLocation={7} val={gameStatus[7]} onClick={handleClick}/>
            <Square cellLocation={8} val={gameStatus[8]} onClick={handleClick}/>
        </div>
    </>)
}

export default Board;