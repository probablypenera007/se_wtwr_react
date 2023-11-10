import { Link } from "react-router-dom/cjs/react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import * as auth from "../../utils/Auth.js";
//import RegisterModal from "../RegisterModal/RegisterModal.js";

const LogInModal = ({ handleCloseModal, isOpen, onSubmit,buttonText, onClick }) => {
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
    onSubmit({email, password}).then((res) => handleCloseModal())
  };
  return (
    <div className="login">
      <ModalWithForm
        title="Log In"
        onClose={handleCloseModal}
        isOpen={isOpen}
        onSubmit={handleFormSubmitLogIn}
        buttonText={buttonText}
     //    onClick={RegisterModal} 
      >
        <div className="login__container">
          <label className="modal__label">
            Email:
            <input
            id="login-email"
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
            id="login-password"
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
          <Link to="/signup" className="register__link" 
          // onClick={RegisterModal} 
          >
            or Register
          </Link>
        </div>
      </ModalWithForm>
    </div>
  );
};

export default LogInModal;
