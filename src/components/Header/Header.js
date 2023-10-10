 import "./Header.css";
import wtwrlogo from "../../images/wtwrlogo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Header = ({ onCreateModal, weatherLocation }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  console.log("Header Here!");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={wtwrlogo} alt="logo" />
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
        <h3 className="header__name">Terrence Tegegne</h3>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
