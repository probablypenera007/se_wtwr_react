import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";


const AddItemModal = ({ handleCloseModal, onAddItem, isOpen, buttonText }) => {
  const [name, setName] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [weather, setSelectedWeatherType] = useState("");

  const handleAddItemNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddItemUrlChange = (e) => {
    setimageUrl(e.target.value);
  };

  const handleAddItemRadioWeatherType = (e) => {
    setSelectedWeatherType(e.target.value);
  };

  const handleAddItemSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, imageUrl, weather };
    onAddItem(newItem);
  };

  return (
    <ModalWithForm
      title="New Garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleAddItemSubmit}
      buttonText={buttonText}
      modalName={"AddItem_Modal"}
    >
      <label className="modal__label modal__label-add">
        Name
        <input
          className="modal__input-text modal__input-text-add"
          placeholder="Name"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          value={name}
          onChange={handleAddItemNameChange}
          autoComplete="off"
          required
        />
      </label>
      <label className="modal__label modal__label-add">
        Image
        <input
          className="modal__input-text modal__input-text-add"
          placeholder="Image URL"
          type="url"
          name="link"
          minLength="1"
          maxLength="1000"
          value={imageUrl}
          onChange={handleAddItemUrlChange}
          autoComplete="off"
          required
        />
      </label>
      <label className="modal__label modal__label-add">
        Select the Weather Type:
      </label>
      <div>
        <div>
          <input
            className="modal__input-radio"
            type="radio"
            id="radioHot"
            value="hot"
            name="weather"
            onChange={handleAddItemRadioWeatherType}
          />
          <label className="modal__label-radio" htmlFor="radioHot">
            Hot
          </label>
        </div>
        <div>
          <input
            className="modal__input-radio"
            type="radio"
            id="radioWarm"
            value="warm"
            name="weather"
            onChange={handleAddItemRadioWeatherType}
          />
          <label className="modal__label-radio" htmlFor="radioWarm">
            Warm
          </label>
        </div>
        <div>
          <input
            className="modal__input-radio"
            type="radio"
            id="radioCold"
            value="cold"
            name="weather"
            onChange={handleAddItemRadioWeatherType}
          />
          <label className="modal__label-radio" htmlFor="radioCold">
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
