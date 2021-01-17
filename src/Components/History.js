const History = ({history}) => {
    const buttons = history.map((gameboard, index) => {
        return index != 0 ? 
            <button>Go back to move {index + 1}</button> : 
            <button>Go back to start</button>
    });
    
    return (    
        <div className="history">
            {buttons}
        </div>
    )
}

export default History;