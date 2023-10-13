import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  modalName,
  isOpen,
  onSubmit,

}) => {
  return (
    <div className={`modal modal_type_${modalName}`}>
      <div className="modal__content">
        <button
          className="button__close-modal"
          type="button"
          onClick={onClose}
        />
        <form className="modal__form" onSubmit={onSubmit}>
          <h3 className="modal__title">{title}</h3>
          {children}
          <button className="button__submit-modal" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
