const History = ({history, goBack}) => {
    const buttons = history.map((gameboard, index) => {
        if(history.length > 1){
            return index !== 0 ?  
                <button onClick={() => goBack(index) } key={index}>Go back to move {index}</button> :
                <button onClick={() => goBack(index) } key={index}>Go back to start</button>
        }
        return null;
    });

    return (    
        <div className="history">
            {buttons}
        </div>
    )
}

export default History;