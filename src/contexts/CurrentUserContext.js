import React from "react";


const CurrentUserContext = React.createContext({
    currentUser: {}
    // setCurrentUSer: () => {},
    // isLoggedIn: false,
    // setIsLoggedIn: () => {}
});  

export default CurrentUserContext;