import { useState, useEffect } from 'react';
import Square from  './Square';

const Board = ({isGameOver, checkVictory}) => {
    
    const [gameStatus, setGameStatus] = useState(Array(9).fill(null));  // Gameboard
    const [isX, setIsX] = useState(true);                               // X or O's turn
      
    const handleClick = cellLocation => {
        if(isGameOver) return;                                      // If game is over, prevents further mucking about
        const currentStatus = gameStatus.slice();
        isX ? currentStatus[cellLocation] = 'X' : currentStatus[cellLocation] = 'O';
        setIsX(!isX);
        setGameStatus(currentStatus);
    }

    useEffect(() => checkVictory(gameStatus), [gameStatus, checkVictory]);                          // Checks for victory conditions after current board is updated

    return (
    <main>
        <div className="row">
            <Square cellLocation={0} val={gameStatus[0]} onClick={handleClick}/>
            <Square cellLocation={1} val={gameStatus[1]} onClick={handleClick}/>
            <Square cellLocation={2} val={gameStatus[2]} onClick={handleClick}/>
        </div>
        <div className="row middle-row">
            <Square cellLocation={3} val={gameStatus[3]} onClick={handleClick}/>
            <Square cellLocation={4} val={gameStatus[4]} onClick={handleClick}/>
            <Square cellLocation={5} val={gameStatus[5]} onClick={handleClick}/>
        </div>
        <div className="row">
            <Square cellLocation={6} val={gameStatus[6]} onClick={handleClick}/>
            <Square cellLocation={7} val={gameStatus[7]} onClick={handleClick}/>
            <Square cellLocation={8} val={gameStatus[8]} onClick={handleClick}/>
        </div>
    </main>)
}

export default Board;