const ItemModal = ({selectedCard, onClose}) => {
    console.log("i'm item modal")

    return (
        <div className={`modal`}>
            <div className="modal__content">
            <button className="button__close-modal" type='button'onClick={onClose}></button>
              <img src={selectedCard.link} alt="selected-card"/> 
              <div>{selectedCard.name}</div>
              <div>{selectedCard.weather}</div>
      </div>
     </div>
    )
}

export default ItemModal;