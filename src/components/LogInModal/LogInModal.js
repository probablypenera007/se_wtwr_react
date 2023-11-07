import { Link } from "react-router-dom/cjs/react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const LogInModal = ({
  handleCloseModal,
  isOpen,
  onSubmit,
  buttonText,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmitLogIn = (e) => {
    e.preventDefault();
    onSubmit( email, password);
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
