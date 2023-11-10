import React from "react";
import "./Header.css";
import wtwrlogo from "../../images/wtwrlogo.svg";
//import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Header = ({
  onCreateModal,
  weatherLocation,
  isLoggedIn,
  onLogInModal,
  onRegisterModal,
 // currentUser,
}) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

const currentUser = React.useContext(CurrentUserContext)
// console.log("currentUser in header.js: ",currentUser)
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

        <div className="header__button-container">
          {isLoggedIn ? (
            <button
              className="header__button-addClothes"
              type="text"
              onClick={onCreateModal}
            >
              + Add Clothes
            </button>
          ) : (
            <button
              className="header__button-register"
              type="button"
              onClick={onRegisterModal}
            >
              Sign Up
            </button>
          )}
        </div>

        <div className="link__container">
          {isLoggedIn ? (
            <Link to="/profile">
              <h3 className="header__name">{
              currentUser.name  
            //  "Terrence Tegegne"
              } </h3>
              <div>
                <img src={
                  currentUser.avatar 
               
                  } className="header__avatar-img" alt="avatar" />
              </div>
            </Link>
          ) : (
            <Link
              to="/signin"
              className="header__login-link"
              onClick={onLogInModal}
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
