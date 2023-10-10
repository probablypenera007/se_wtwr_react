import ModalWithForm from "../ModalWithForm/ModalWithForm";


const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  return (
    <ModalWithForm title="New Garment" onClose={handleCloseModal} isOpen={isOpen} onSubmit={onAddItem}>
      <label className="modal__label">
        Name
        <input
          className="modal__input-text"
          placeholder="Name"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          required
        />
      </label>
      <label className="modal__label">
        Image
        <input
          className="modal__input-text"
          placeholder="Image URL"
          type="url"
          name="link"
          minLength="1"
          maxLength="30"
          required
        />
      </label>
      <label className="modal__label">Select the Weather Type:</label>
      <div>
        <div>
          <input
            className="modal__input-radio"
            type="radio"
            id="hot"
            value="hot"
            name="selected-weather-type"
          />
          <label className="modal__label-radio" htmlFor="hot">
            Hot
          </label>
        </div>
        <div>
          <input
            className="modal__input-radio"
            type="radio"
            id="warm"
            value="warm"
            name="selected-weather-type"
          />
          <label className="modal__label-radio" htmlFor="warm">
            Warm
          </label>
        </div>
        <div>
          <input
            className="modal__input-radio"
            type="radio"
            id="cold"
            value="cold"
            name="selected-weather-type"
          />
          <label className="modal__label-radio" htmlFor="cold">
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;