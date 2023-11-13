import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const RegisterModal = ({
  handleCloseModal,
  isOpen,
  onSubmit,
  buttonText,
  openLogInModal,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleFormSubmitRegister = (e) => {
    e.preventDefault();
    onSubmit({ email, password, name, avatar });
  };

  const handleOpenLogin = (e) => {
    e.preventDefault();
    openLogInModal();
  };

  return (
    <div className="register">
      <ModalWithForm
        title="Sign Up"
        onClose={handleCloseModal}
        isOpen={isOpen}
        onSubmit={handleFormSubmitRegister}
        buttonText={buttonText}
        modalName={"Register_Modal"}
      >
        <label className={"modal__label modal__label_register"}>
          Email*
          <input
            id="register-email"
            className="modal__input-text modal__input_text-register"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            minLength="1"
            maxLength="30"
            autoComplete="off"
            required
          />
        </label>
        <label className="modal__label modal__label_register">
          Password*
          <input
            id="register-password"
            className="modal__input-text modal__input_text-register"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            minLength="1"
            autoComplete="off"
            required
          />
        </label>
        <label className="modal__label modal__label_register">
          Name
          <input
            id="register-name"
            className="modal__input-text modal__input_text-register"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            autoComplete="off"
            required
          />
        </label>
        <label className="modal__label modal__label_register">
          Avatar URL
          <input
            id="register-avatar"
            className="modal__input-text modal__input_text-register"
            type="url"
            name="avatar"
            placeholder="Avatar URL"
            value={avatar}
            onChange={handleAvatarChange}
            minLength="1"
            autoComplete="off"
            // required
          />
        </label>
        <Link to="/" className="login__link" onClick={handleOpenLogin}>
          or Log In
        </Link>
      </ModalWithForm>
    </div>
  );
};

export default RegisterModal;
