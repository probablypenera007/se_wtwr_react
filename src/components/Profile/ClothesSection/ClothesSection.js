import ItemCard from "../../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({ clothingItems, onSelectCard, onCreateModal }) => {
  
  if (!Array.isArray(clothingItems)) {
    return
  }

  
  
  return (
    <section className="clothes__section">
      <div className="clothes__section-title">Your Item</div>
      <button
        className="clothes__section_add-button"
        type="button"
        onClick={onCreateModal}
      >
        + Add items
      </button>
      <ul className="clothes__section-gallery">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          );
        })}
      </ul>
    </section>
  );
};
export default ClothesSection;
