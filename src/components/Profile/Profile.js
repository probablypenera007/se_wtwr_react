import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";

import "./Profile.css";

function Profile({ 
  clothingItems, 
  onSelectCard, 
  onCreateModal, 
  onLogOut, 
  isLoggedIn, 
  currentUser 
}) {
  return (
    <section className="profile">
      <SideBar 
      onLogOut={onLogOut} 
      currentUser={currentUser}
      />
      <div>
        <ClothesSection
          clothingItems={clothingItems}
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </section>
  );
}

export default Profile;
