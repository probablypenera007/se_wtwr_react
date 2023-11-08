import { Link , useHistory} from "react-router-dom/cjs/react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const RegisterModal = ({  handleCloseModal, isOpen, onSubmit, buttonText}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const history = useHistory();


  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleAvatarChange = (e) => setAvatar(e.target.value);

  const handleFormSubmitRegister = (e) => {
    e.preventDefault();
    onSubmit(email, password, name, avatar)
    .then(() => {
      history.push("/login");
      handleCloseModal();
    })
    .catch(err=> {
      console.error("Registration error: ", err);
    });
  };

  return (
    <div className="register">
      <ModalWithForm
        title="Sign Up"
        onClose={handleCloseModal}
        isOpen={isOpen}
        onSubmit={handleFormSubmitRegister}
        buttonText={buttonText}
      >
        <div className="register__container">
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
          <label className="modal__label">
            Name:
            <input
              className="modal__input-text"
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </label>
          <label className="modal__label">
            Avatar URL:
            <input
              className="modal__input-text"
              type="url"
              name="avatar"
              value={avatar}
              onChange={handleAvatarChange}
              minLength="1"
              required
            />
          </label>
        </div>
        {/* <button className="button__submit-modal_register">{buttonText}</button> */}
        <div className="register__tologin">
        <Link to="/login" className="login__link">
          or Log In
        </Link>
      </div>
      </ModalWithForm>
     
    </div>
  );
};

export default RegisterModal;
