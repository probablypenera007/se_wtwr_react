import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import * as auth from "../../utils/Auth.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

const EditProfileModal = ({ handleCloseModal, isOpen, onSubmit,buttonText }) => {
  const currentUser = React.useContext(CurrentUserContext)
  const [name, setName] = useState(currentUser.name);
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const history = useHistory();

//console.log("value of currentuser in Edit profile for .name and .avatar: ",currentUser.name , currentUser.avatar);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleFormSubmitEdit = (e) => {
    e.preventDefault();
    onSubmit({name, avatar}).then((res) => {
      handleCloseModal();
    })
  };
  return (
    <div className="edit__profile">
      <ModalWithForm
        title="Change Profile Data"
        onClose={handleCloseModal}
        isOpen={isOpen}
        onSubmit={handleFormSubmitEdit}
        buttonText={buttonText}
      >
        <div className="login__container">
          <label className="modal__label">
            Name:
            <input
              className="modal__input-text"
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              minLength="1"
              required
            />
          </label>
          <label className="modal__label">
            Avatar:
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
      </ModalWithForm>
    </div>
  );
};

export default EditProfileModal;
