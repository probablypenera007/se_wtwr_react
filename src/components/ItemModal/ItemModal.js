import "./ItemModal.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import React from "react";

const ItemModal = ({ selectedCard, onClose, onDeleteCard, buttonText }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = selectedCard.owner._id === currentUser._id;

  const handleDeleteCard = () => {
    onDeleteCard(selectedCard);
  };

  const itemDeleteButtonClassName = `button__delete-preview ${isOwn ? 'button__delete-preview_visible' : 'button__delete-preview_hidden'}`;

  return (
    <div className={`modal`}>
      <div className="modal__content-preview">
        <button
          className="button__close-modal-white"
          type="button"
          onClick={onClose}
        ></button>
        <img
          src={selectedCard.imageUrl}
          className="modal__image-preview"
          alt={selectedCard.name}
        />
        <h3 className="modal__preview-name">{selectedCard.name}</h3>
        <div className="modal__preview-weather">
          Weather: {selectedCard.weather}
        </div>
        {/* {isOwn && ( */}
        <button className={itemDeleteButtonClassName} onClick={handleDeleteCard}>
          {buttonText}
        </button>
          {/* )} */}
      </div>
    </div>
  );
};

export default ItemModal;
