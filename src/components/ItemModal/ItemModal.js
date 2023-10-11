import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {


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
      </div>
    </div>
  );
};

export default ItemModal;
