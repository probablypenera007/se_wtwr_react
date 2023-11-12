import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
//import { useHistory } from "react-router-dom/cjs/react-router-dom";
//import * as auth from "../../utils/Auth.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

const EditProfileModal = ({ handleCloseModal, isOpen, onSubmit,buttonText }) => {
  const currentUser = React.useContext(CurrentUserContext)
  const [name, setName] = useState(currentUser.name);
  const [avatar, setAvatar] = useState(currentUser.avatar);

//console.log("value of currentuser in Edit profile for .name and .avatar: ",currentUser.name , currentUser.avatar);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleFormSubmitEdit = (e) => {
    e.preventDefault();
    onSubmit({name, avatar})
  };
  
  return (
    <div className="edit__profile">
      <ModalWithForm
        title="Change Profile Data"
        onClose={handleCloseModal}
        isOpen={isOpen}
        onSubmit={handleFormSubmitEdit}
        buttonText={buttonText}
        modalName={"EditProfile_Modal"}
      >
      
          <label className="modal__label  modal__label_edit">
            Name:
            <input
            id="edit-name"
              className="modal__input-text modal__input-text-edit"
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              minLength="1"
              required
            />
          </label>
          <label className="modal__label modal__label_edit">
            Avatar:
            <input
            id="edit-avatar"
              className="modal__input-text modal__input-text-edit"
              type="url"
              name="avatar"
              value={avatar}
              onChange={handleAvatarChange}
              minLength="1"
              required
            />
          </label>
       
      </ModalWithForm>
    </div>
  );
};

export default EditProfileModal;
