import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";

import "./Profile.css";

function Profile({ clothingItems, onSelectCard, onCreateModal }) {
  return (
    <section className="profile">
      <SideBar />
      <div>
        <ClothesSection
          clothingItems={clothingItems}
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
        />
      </div>
    </section>
  );
}

export default Profile;
