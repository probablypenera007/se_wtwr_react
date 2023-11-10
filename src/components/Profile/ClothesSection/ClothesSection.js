import React from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import ItemCard from "../../ItemCard/ItemCard";
import "./ClothesSection.css";


const ClothesSection = ({
  clothingItems,
  onSelectCard,
  onCreateModal,
  onLikeClick,
}) => {
  const currentUser = React.useContext(CurrentUserContext)
// console.log("value of item, check item id: " , clothingItems)
  // const userClothingItems = clothingItems.filter((item) => {
  //   return item.owner === currentUser.id;
  // })

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
        {/* {userClothingItems.map((item) => { */}
        {clothingItems.map((item) => {
          console.log("value of item in clothesSection.map, check item id: ",item)
          return (
            <ItemCard
              key={item.id || item._id}
              item={item}
              onSelectCard={onSelectCard}
              currentUser={currentUser}
              onLikeClick={onLikeClick}
            />
          );
        })}
      </ul>
    </section>
  );
};
export default ClothesSection;
