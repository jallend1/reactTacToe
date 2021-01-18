const History = ({history, goBack}) => {
    const buttons = history.map((gameboard, index) => {
        if(history.length > 1){                                                                         // Only continues if there's more than just the initial blank board
            if(index === 0){
                return <button onClick={() => goBack(index) } key={index} className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Go back to start</button>;
            }
            else if(index === history.length - 1){
                return null;
            }
            else{
                return <button onClick={() => goBack(index) } key={index} className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent history-button">Go back to move {index}</button>
            }
                
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