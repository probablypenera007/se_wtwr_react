import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import "./App.css";
import {
  getForecastWeather,
  parseWeatherData,
  parseLocationData,
  parseWeatherForecastData,
  parseTimeOfDay,
} from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { Switch, Route, useHistory } from "react-router-dom/cjs/react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import * as api from "../../utils/Api";
import * as auth from "../../utils/Auth";
//import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LogInModal from "../LogInModal/LogInModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";


function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weatherLocation, setWeatherLocation] = useState("");
  const [weatherForecast, setWeatherForecast] = useState("");
  const [isDay, setIsDay] = useState(true);
  const [currentTemperatureUnit, setCurrentTempUnit] = useState("F");
  const [isLoading, setIsLoading] = useState(false);
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  
  const history = useHistory();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setIsLoggedIn(true);
      auth.checkToken(jwt).then((user) => {
        console.log("Value of CurrentUser: ", user)
        console.log("Value of CurrentUser's Name: ", user.data.name)
        console.log("Value of CurrentUser's Avatar: ", user.data.avatar)
          setCurrentUser(user.data);
          history.push("/profile"); 
      }).catch((err) => {
        console.error("Token verification failed:", err);
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
        setCurrentUser({});
      });
    }
  }, []);


  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleLogInModal = () => {
    // for headers login button
    setActiveModal("login-signin");
  };

  const handleRegisterModal = () => {
    // for headers register button
    setActiveModal("register-signup");
  };

  const handleEditProfileModal = () => {
    setActiveModal("edit-profile");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
    console.log(card, "check value of card if ID is present");
  };

  function handleSubmit(request) {
    setIsLoading(true);
    request()
    .then((data) => {
      handleCloseModal();
      return data;
    })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  const handleAddItemSubmit = (newItem) => {
    function requestAddItem() {
      return api.addItem(newItem).then((addedItem) => {
        if (addedItem) {
          setClothingItems(addedItem => [...addedItem,clothingItems]);
        }
      });
    }
    handleSubmit(requestAddItem);
  };

  const handleRegisterSubmit = (data) => {
    setIsLoading(true);
    return auth.register(data)
      .then((res) => {
        handleLogInSubmit(data)
        handleCloseModal();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

const handleEditProfileSubmit = (data) => {
  setIsLoading(true)
  const jwt = localStorage.getItem("jwt");
  return auth.editProfile(jwt, data)
  .then((update) => {
    setCurrentUser(update.data);
    handleCloseModal();
  })
  .catch(console.error)
  .finally(() => setIsLoading(false)); 
}

  const handleLogInSubmit = (data) => {
    setIsLoading(true)
    return auth.logIn(data)
    .then((res) => {
      setIsLoggedIn(true)
      if (res.token) {
        localStorage.setItem("jwt", res.token);
        auth.checkToken(res.token).then((user) => setCurrentUser(user.data))
        history.push("/profile");
      }
    })
    .catch(console.error)
    .finally(() => setIsLoading(false));
  };
  
  const handleLogOut = () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    setCurrentUser("");
    history.push("/")
  };

  const handleDeleteCard = (card) => {
    function requestDeleteItem() {
      return api.deleteItem(card._id).then(() => {
        console.log(card._id, "card.id value check DELETE CARD");
        const updatedItems = clothingItems.filter(
          (item) => item._id !== card._id
        );
        setClothingItems(updatedItems);
      });
    }
    handleSubmit(requestDeleteItem);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTempUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTempUnit("C");
  };

  useEffect(() => {
    if (!activeModal) return; // stop the effect not to add the listener if there is no active modal
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]); // watch activeModal here

  useEffect(() => {
    if (isLoggedIn) {
      api
        .getItems()
        .then((res) => {
          console.log("getItems data value: ", res)
          if (Array.isArray(res.data)) {
            setClothingItems(res.data);
          } else {
            console.error('Data received is not an array:', res.data);
          }
        })
        .catch(console.error);
    }
  }, [isLoggedIn]);



  // useEffect for users

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
        const location = parseLocationData(data);
        setWeatherLocation(location);
        const weatherForecast = parseWeatherForecastData(data);
        setWeatherForecast(weatherForecast);
        const isDay = parseTimeOfDay(data);
        setIsDay(isDay);
      })
      .catch(console.error);
  }, []);
   console.log(temp, "this is set temp");
   console.log(weatherLocation, "this is APP.js current location");
   console.log(weatherForecast, "this is current weather forecast");
  console.log(isDay, "this is App.js is it day time???");
  console.log("Clothing items state in App:", clothingItems);
  return (
    <CurrentUserContext.Provider 
    value={currentUser}
    >
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            weatherLocation={weatherLocation}
            onCreateModal={handleCreateModal}
            temp={temp}
            isLoggedIn={isLoggedIn}
            onLogInModal={handleLogInModal}
            onRegisterModal={handleRegisterModal}
           currentUser={currentUser}
         />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                isDay={isDay}
                weatherForecast={weatherForecast}
                clothingItems={clothingItems}
              />
            </Route>
            <Route path="/profile">
              <Profile
                clothingItems={clothingItems}
                onSelectCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
                onLogOut={handleLogOut}
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}
                onEditProfile={handleEditProfileModal}
              />
            </Route>
          </Switch>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={handleAddItemSubmit}
              buttonText={isLoading ? "Saving..." : "Add Garment"}
              handleSubmit={handleSubmit}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDeleteCard={handleDeleteCard}
              buttonText={isLoading ? "Deleting..." : "Delete Item"}
            />
          )}
          {/* <Switch>
          <Route path="/signin"> */}
          {activeModal === "login-signin" && (
            <LogInModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "login-signin"}
            buttonText={isLoading ? "Logging In..." : "Log In"}
            onSubmit={handleLogInSubmit}
            // onClick={handleRegisterModal}
            />
          )}
          {/* </Route>
          <Route path="/signup"> */}
          {activeModal === "register-signup" && (
            <RegisterModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "register-signup"}
            buttonText={isLoading ? "Signing Up..." : "Next"}
            onSubmit={handleRegisterSubmit}
            // onClick={handleLogInModal}
            />
          )}
          {activeModal === "edit-profile" && (
            <EditProfileModal 
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "edit-profile"}
            buttonText={isLoading ? "Saving..." : "Save Changes"}
            onSubmit={handleEditProfileSubmit}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
