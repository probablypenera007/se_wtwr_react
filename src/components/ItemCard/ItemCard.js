import "./ItemCard.css";

const ItemCard = ({item}) => {
    return <div>
      <div>
        <img src={item.link} alt="clothing" className='card__item-image' />
      </div>
      <div className='card__item-name'>
        {item.name}
      </div>
    </div>;
  }

  export default ItemCard