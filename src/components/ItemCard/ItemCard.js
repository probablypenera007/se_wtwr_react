import "./ItemCard.css";

const ItemCard = ({item, onSelectCard}) => {
    return <div>
      <div className="card__elements">
        <img src={item.link}  className='card__item-image' onClick= {() => onSelectCard()} alt="clothing"/>
      </div>
      <h2 className='card__item-name'>
        {item.name}
      </h2>
    </div>;
  }

  export default ItemCard