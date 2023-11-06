import "./Header.css";
import wtwrlogo from "../../images/wtwrlogo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Header = ({ onCreateModal, weatherLocation, isLoggedIn, onLogInModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={wtwrlogo} alt="logo" />
          </Link>
        </div>
        <div className="header__date">
          {currentDate}, {weatherLocation}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        
        <div>
          <button
            className="header__button-addClothes"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        {/* <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>
          <h3 className="header__name">Terrence Tegegne</h3>
        </Link> */}
        <div className="link__container">
        <Link to="/profile">
          <h3 className="header__name">Terrence Tegegne</h3>
        </Link>
        </div>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
