const Square = ({ cellLocation, val, onClick }) => {
  if (val === "X") {
    return (
      <div className="cell" onClick={() => onClick(cellLocation)}>
        <i className="material-icons">clear</i>
      </div>
    );
  }
  if (val === "O") {
    return (
      <div className="cell" onClick={() => onClick(cellLocation)}>
        <i className="material-icons">data_usage</i>
      </div>
    );
  } else {
    return (
      <div className="cell" onClick={() => onClick(cellLocation)}>
        {val}
      </div>
    );
  }
};

export default Square;
