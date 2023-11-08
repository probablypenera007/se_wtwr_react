import { Link } from "react-router-dom/cjs/react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import * as auth from "../../utils/Auth.js";

const LogInModal = ({ handleCloseModal, isOpen, onSubmit, buttonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmitLogIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    auth
      .logIn(email, password)
      .then((data) => {
        if (data.jwt) {
          setEmail("");
          setPassword("");
          history.push("/profile");
        }
      })
      .catch((err) => {
        console.error("LogIn error: ", err);
      });
  };
  return (
    <div className="login">
      <ModalWithForm
        title="Log In"
        onClose={handleCloseModal}
        isOpen={isOpen}
        onSubmit={handleFormSubmitLogIn}
        buttonText={buttonText}
      >
        <div className="login__container">
          <label className="modal__label">
            Email:
            <input
              className="modal__input-text"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              minLength="1"
              required
            />
          </label>
          <label className="modal__label">
            Password:
            <input
              className="modal__input-text"
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              minLength="1"
              required
            />
          </label>
        </div>
        {/* <button className="button__submit-modal_login">{buttonText}</button> */}
        <div className="login__toregister">
          <Link to="/register" className="register__link">
            or Register
          </Link>
        </div>
      </ModalWithForm>
    </div>
  );
};

export default LogInModal;
