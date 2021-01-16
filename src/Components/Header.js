const Header = ({isGameOver}) => {
    return (
        <header>
            <h1>React Tac Toe</h1>
            <h2>Is the game over? 
                <span>{isGameOver ? 'Yes' : 'No!'}</span>
            </h2> 
        </header>
    )
}

export default Header;