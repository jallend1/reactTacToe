const Header = ({ isGameOver, isX }) => {
  return (
    <div className="mdl-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <h1 className="mdl-layout-title">React Tac Toe</h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
