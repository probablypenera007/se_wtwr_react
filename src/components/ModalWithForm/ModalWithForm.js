import "./ModalWithForm.css";

const ModalWithForm = ({
    children, 
    buttonText="Add Garment",
    title, 
    onClose, 
    modalName}) => {
    return (
        <div className={`modal modal_type_${modalName}`}>
            <form className="modal__form">
            <div className="modal__content">
            <button className="button__close-modal" type='button'onClick={onClose}></button>
            
            <h3 className="modal__title">{title}</h3>
            {children}
        <button className="button__submit-modal" type="submit">{buttonText}</button>
        </div>
        </form>
        </div>
    )
}

export default ModalWithForm;