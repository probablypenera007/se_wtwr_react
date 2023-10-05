import "./ItemCard.css";

const ItemCard = ({item}) => {
    return <div>
      <div className="card__elements">
        <img src={item.link} alt="clothing" className='card__item-image' />
      </div>
      <h2 className='card__item-name'>
        {item.name}
      </h2>
    </div>;
  }

  export default ItemCard