const Header = ({ handleTheme }) => {
    return (
        <header className="primary-header-container">
            <h1 className="primary-header">TODO</h1>
            <button onClick={handleTheme} className="primary-header__button"></button>
        </header>
    )
}

export default Header;