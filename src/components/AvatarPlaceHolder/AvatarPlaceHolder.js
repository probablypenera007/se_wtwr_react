import React from "react";
import "./AvatarPlaceHolder.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const AvatarPlaceHolder = () => {
    const currentUser = React.useContext(CurrentUserContext)
    const firstLetter = currentUser && currentUser.name ? currentUser.name[0] : '';
    console.log("value of firstlettercurrentUser in avatarplaceholder: ", firstLetter);
  return <div className="avatar__placeholder">{firstLetter}</div>;
}

export default AvatarPlaceHolder;