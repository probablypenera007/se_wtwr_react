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
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import * as api from "../../utils/Api";
import * as auth from "../../utils/Auth";
//import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LogInModal from "../LogInModal/LogInModal";
import RegisterModal from "../RegisterModal/RegisterModal";
//json-server --watch db.json --id _id --port 3001   REFERENCE FOR RUNNING DB

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
      .then(handleCloseModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  const handleAddItemSubmit = (newItem) => {
    function requestAddItem() {
      return api.addItem(newItem).then((addedItem) => {
        if (addedItem) {
          setClothingItems([addedItem, ...clothingItems]);
        }
      });
    }
    handleSubmit(requestAddItem);
  };

  const handleRegisterSubmit = (email, password, name, avatar) => {
    const requestRegister = () => {
      return auth.register(email, password, name, avatar).then((registered) => {
        if (registered) {
          localStorage.setItem("jwt", registered.jwt);
          return auth.checkToken(registered.jwt).then((user) => {
            setCurrentUser(user);
            setIsLoggedIn(true);
          });
        } else {
          throw new Error("registration failed");
        }
      });
    };
    handleSubmit(requestRegister);
  };

  const handleLogInSubmit = (email, password) => {
    const requestLogIn = () => {
      return auth.logIn(email, password).then((logged) => {
        if (logged) {
          localStorage.setItem("jwt", logged.jwt);
          // Assuming auth.checkToken should receive the jwt
          return auth.checkToken(logged.jwt).then((user) => {
            setCurrentUser(user);
            setIsLoggedIn(true);
          });
        } else {
          // Handle the case where `logged` is undefined or null
          throw new Error("login failed");
        }
      });
    };

    handleSubmit(requestLogIn);
  };

  // const handleLogOut = () => {
  //   localStorage.removeItem('jwt');
  //   setIsLoggedIn(false);
  // };

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
    api
      .getItems()
      .then((items) => {
        setClothingItems(items);
        console.log("Fetched clothing items with no authorization:", items);
      })
      .catch(console.error);
    //console.log(clothingItems, "add item setclothing items testing in app.js");
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsLoggedIn(true);
      auth
        .checkToken(token)
        .then((user) => {
          setCurrentUser(user);
          return api.getItems();
        })
        .then((items) => {
          setClothingItems(items);
          console.log("fetched clothing items with authorization: ", items);
        })
        .catch((err) => {
          console.error(err.message);
          setIsLoggedIn(false);
        });
    } else {
      setIsLoggedIn(false);
      console.log("No JWT found, user is not logged in.");
    }
  }, []);

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
  //  console.log(temp, "this is set temp");
  //  console.log(weatherLocation, "this is APP.js current location");
  //  console.log(weatherForecast, "this is current weather forecast");
  // console.log(isDay, "this is App.js is it day time???");
  console.log("Clothing items state in App:", clothingItems);
  return (
    <CurrentUserContext.Provider value={currentUser}>
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
          {activeModal === "login-signin" && (
            <LogInModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "login-signin"}
              buttonText={isLoading ? "Logging In..." : "Log In"}
              onSubmit={handleLogInSubmit}
            />
          )}
          {activeModal === "register-signup" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "register-signup"}
              buttonText={isLoading ? "Signing Up.." : "Next"}
              onSubmit={handleRegisterSubmit}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
