import "../style/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="header">
      <h1>Alpha's Mind</h1>
      <div className="header__contents">
        <Link className="header__contents--link" to="/About_me">About me</Link>
        <Link className="header__contents--link" to="/My_hobbies">My hobbies</Link>
        <Link className="header__contents--link" to="/My_Current_Goal">My Current Goals</Link>
        <Link className="header__contents--link" to="/Contact_me" >Contact me</Link>
      </div>
    </div>
  );
};

export default Header;
