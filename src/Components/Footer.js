const Footer = ({isGameOver, isX, gameStatus}) => {
    const victoryState = () => {
        if(isGameOver){
            if(isX){
                return <h2>O is the winner!</h2>
            }
            if(!isX){
                return <h2>X is the winner!</h2>
            }
        }
        else if(gameStatus.indexOf(null) === -1){
            return <h2>We've got a draw, folks!</h2>
        }
        return null;
    }
    return victoryState();
}

export default Footer;