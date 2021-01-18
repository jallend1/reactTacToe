const Footer = ({isGameOver, isX, gameStatus}) => {
    const victoryState = () => {
        if(isGameOver){
            const winner = isX ? 'O' : 'X';
            return (
                <div className="victory">
                    <h2>{winner} is the winner!</h2>
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent history-button">Play Again?</button>
                </div>
            )
        }
        else if(gameStatus.indexOf(null) === -1){
            return <h2>We've got a draw, folks!</h2>
        }
        return null;
    }
    return victoryState();
}

export default Footer;