const Square = ({cellLocation, val, onClick}) => {
    return(
        <div 
            className="cell" 
            onClick={() => onClick(cellLocation)}>
            {val}
        </div>
    )
}

export default Square;