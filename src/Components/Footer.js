const Footer = ({isGameOver, isX, gameStatus, goBack}) => {
    const victoryState = () => {
        if(isGameOver){
            const winner = isX ? 'O' : 'X';
            return (
                <div className="victory">
                    <h2>{winner} is the winner!</h2>
                    <button onClick={() => goBack(0) } className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent history-button">Play Again?</button>
                </div>
            )
        }
        else if(gameStatus.indexOf(null) === -1){
            return (
                <div className="victory">
                    <h2>We've got a draw, folks!</h2>
                    <button onClick={() => goBack(0) } className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent history-button">Play Again?</button>
                </div>
                )
        }
        return null;
    }
    return victoryState();
}

export default Footer;