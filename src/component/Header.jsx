import "../style/Header.scss";

const Header = () => {
    return (
        <div className="header">
            <h1>Alpha's Mind</h1>
            <div className="header__contents">
                <h2>About me</h2>
                <h2>My hobbies</h2>
                <h2>My Current Goals</h2>
                <h2>Contact me</h2>
            </div>
        </div>
    );
}

export default Header;