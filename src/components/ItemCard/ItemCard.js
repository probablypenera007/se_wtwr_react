import "./ItemCard.css";

const ItemCard = ({item, onSelectCard}) => {
    return (
      <div className="card">
        <img 
        src={item.link}  
        className='card__item-image' 
        onClick= {() =>  onSelectCard(item)} 
        alt={item.name}/>
      <h2 className='card__item-name'>
        {item.name}
      </h2>
    </div>
  )}

  export default ItemCard