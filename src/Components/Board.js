import Square from "./Square";

const Board = ({ gameStatus, handleMove }) => {
  return (
    <main>
      <div className="row">
        <Square cellLocation={0} val={gameStatus[0]} onClick={handleMove} />
        <Square cellLocation={1} val={gameStatus[1]} onClick={handleMove} />
        <Square cellLocation={2} val={gameStatus[2]} onClick={handleMove} />
      </div>
      <div className="row middle-row">
        <Square cellLocation={3} val={gameStatus[3]} onClick={handleMove} />
        <Square cellLocation={4} val={gameStatus[4]} onClick={handleMove} />
        <Square cellLocation={5} val={gameStatus[5]} onClick={handleMove} />
      </div>
      <div className="row">
        <Square cellLocation={6} val={gameStatus[6]} onClick={handleMove} />
        <Square cellLocation={7} val={gameStatus[7]} onClick={handleMove} />
        <Square cellLocation={8} val={gameStatus[8]} onClick={handleMove} />
      </div>
    </main>
  );
};

export default Board;
