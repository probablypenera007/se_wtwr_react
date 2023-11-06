import ModalWithForm from "../ModalWithForm/ModalWithForm"


const LogInModal = ({
handleCloseModal,
isOpen,
onSubmit,
buttonText,

}) => {
    return (
        <ModalWithForm
        title="Log In"
        onClose={handleCloseModal}
        isOpen={isOpen}
        onSubmit={onSubmit}
        buttonText={buttonText}>
     <div className="login__email-container">
        <label className="modal__label">
          Email:
          <input 
          className="modal__input-text"
          type="url"
          name="email"
          minLength="1"
          />
        </label>
        <label className="modal__label">
          Password:
          <input 
          className="modal__input-text"
          type="email"
          name="email"
          minLength="1"
          required
          />
        </label>
     </div>
     <button className="button__submit-modal_login">
     {buttonText}
     </button>
        </ModalWithForm>
    )
}

export default LogInModal