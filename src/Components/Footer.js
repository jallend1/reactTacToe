const Footer = ({isGameOver, isX}) => {
    const victoryState = () => {
        if(isGameOver){
            if(isX){
                return <h2>O wins!</h2>
            }
            else{
                return <h2>X wins!</h2>
            }
        }
        return null;
    }
    return victoryState();
}

export default Footer;