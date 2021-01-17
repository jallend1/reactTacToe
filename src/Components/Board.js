import Square from  './Square';

const Board = ({gameStatus, isGameOver, handleClick}) => {
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
        </main>
    )
}

export default Board;