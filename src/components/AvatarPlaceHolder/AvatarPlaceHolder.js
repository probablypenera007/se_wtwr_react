// import React from "react";
import "./AvatarPlaceHolder.css";
// import CurrentUserContext from "../../contexts/CurrentUserContext";

const AvatarPlaceHolder = ({ name }) => {
//   const currentUser = React.useContext(CurrentUserContext);
  const firstLetter = name ? name[0] : "";
//   console.log(
//     "value of firstlettercurrentUser in avatarplaceholder: ",
//     firstLetter
//   );
  return <div className="avatar__placeholder">{firstLetter}</div>;
};

export default AvatarPlaceHolder;
