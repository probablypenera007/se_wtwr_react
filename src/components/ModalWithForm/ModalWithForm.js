import "./ModalWithForm.css";

const ModalWithForm = ({children, buttonText="Add Garment", title, onClose, modalName}) => {

    console.log("This is ModalWithForms")
    return (
        <div className={`modal modal_type_${modalName}`}>
            <div className="modal__content">
            <button className="button__close-modal" type='button'onClick={onClose}></button>
            
            <h3>{title}</h3>
        <form className="modal__form">{children}</form>
        <button className="button__submit-modal" type="submit">{buttonText}</button>
        </div>
        </div>
    )
}

export default ModalWithForm;