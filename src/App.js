import { useState, useEffect } from "react";

import "./index.css";
import Header from "./Components/Header";
import Board from "./Components/Board";
import History from "./Components/History";
import Footer from "./Components/Footer";

const App = () => {
  const [gameStatus, setGameStatus] = useState(Array(9).fill(null)); // Gameboard
  const [isGameOver, setIsGameOver] = useState(false); // Game over?
  const [isX, setIsX] = useState(true); // X or O's turn
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const checkVictory = (gameStatus) => {
    //Compares current board to possible victories
    const victories = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
    ];
    victories.forEach(([a, b, c]) => {
      if (
        gameStatus[a] &&
        gameStatus[b] === gameStatus[a] &&
        gameStatus[c] === gameStatus[a]
      ) {
        setIsGameOver(true);
      }
    });
  };

  const goBack = (moveNumber) => {
    const newHistory = history.slice(0, moveNumber + 1);
    const playerTurn = moveNumber % 2 === 0;
    setGameStatus(history[moveNumber]);
    setHistory(newHistory);
    setIsX(playerTurn);
    setIsGameOver(false);
  };
  const handleMove = (cellLocation) => {
    if (isGameOver) return; // If game is over, prevents further mucking about
    if (gameStatus[cellLocation] !== null) return; // If square already played, ignores it
    const currentStatus = gameStatus.slice();
    isX
      ? (currentStatus[cellLocation] = "X")
      : (currentStatus[cellLocation] = "O");
    const currentHistory = history.slice();
    currentHistory.push(currentStatus);
    setHistory(currentHistory);
    setIsX(!isX);
    setGameStatus(currentStatus);
  };

  useEffect(() => checkVictory(gameStatus), [gameStatus, isGameOver]); // Checks for victory conditions after current board is updated

  return (
    <>
      <Header />
      <div className="container">
        <Board gameStatus={gameStatus} handleMove={handleMove} />
        <History history={history} goBack={goBack} />
      </div>
      <Footer
        isGameOver={isGameOver}
        isX={isX}
        gameStatus={gameStatus}
        goBack={goBack}
      />
    </>
  );
};

export default App;
