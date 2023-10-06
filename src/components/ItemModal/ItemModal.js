import "./ItemModal.css"

const ItemModal = ({selectedCard, onClose}) => {
    console.log("i'm item modal")

    return (
        <div className={`modal`}>
            <div className="modal__content-preview">
            <button className="button__close-modal-white" type='button'onClick={onClose}></button>
              <img src={selectedCard.link}
              className="modal__image-preview"
               alt="selected-card"/> 
              <div className="modal__preview-name">{selectedCard.name}</div>
              <div className="modal__preview-weather">Weather: {selectedCard.weather}</div>
      </div>
     </div>
    )
}

export default ItemModal;  