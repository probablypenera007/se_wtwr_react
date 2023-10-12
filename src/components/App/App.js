import { useState, useEffect } from "react";
import Header from "../Header/Header";
//import WeatherCard from '../WeatherCard/WeatherCard';
//import defaultClothingItems from "../../utils/DefaultClothing";
//import ItemCard from '../ItemCard/ItemCard';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
//import ModalWithForm from "../ModalWithForm/ModalWithForm";
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
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import * as api from "../../utils/Api";

function App() {
  //const weatherTemp = "121541512 ºF";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weatherLocation, setWeatherLocation] = useState("");
  const [weatherForecast, setWeatherForecast] = useState("");
  const [isDay, setIsDay] = useState(true);
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([
    {
      _id: 0,
      name: "",
      weather: "",
      imageUrl: "",
    }
  ]);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
    console.log(card, "check value of card if ID is present")
  };

  const handleAddItemSubmit = (newItem) => {
    // e.preventDefault();
     api
      .addItem(newItem)
      .then((addedItem) => {
        if (addedItem) {
          //logic for taking the data from the form
          //const setClothingItems = (values);
          setClothingItems([newItem, ...clothingItems]);
          setSelectedCard({});
          handleCloseModal();
        }
      })
      .catch((err) => {
        console.error("Error: ADDING ITEM DID NOT WORK!!!!", err);
      });
 };


const handleDeleteCard = (card) => {
  api.deleteItem(card._id) 
    .then(() => {
      console.log(card._id, "card.id value check DELETE CARD")
      const updatedItems = clothingItems.filter(item => item._id !== card._id);
      setClothingItems(updatedItems);
      setSelectedCard({});
      handleCloseModal();
    })
    .catch(err => {
      console.error("Error: DELETE ITEM IS NOT WORKING!!!", err);
    });
};



  const handleToggleSwitchChange = () => {
    if (currentTempUnit === "C") setCurrentTempUnit("F");
    if (currentTempUnit === "F") setCurrentTempUnit("C");
  };

  useEffect(() => {
    api.getItems()
    .then((items) => {
      console.log(items, "mock up server items")
      setClothingItems(items); 
    })
    .catch((err) => {
      console.error("Error:", err)
    })
    //console.log(clothingItems, "add item setclothing items testing in app.js");
  }, []);

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
    //   .cactch((err) => {
    //     console.error("Error:", err);
    //   })
  }, []);
  // console.log(temp, "this is set temp");
  // console.log(weatherLocation, "this is APP.js current location");
  // console.log(weatherForecast, "this is current weather forecast");
   console.log(isDay, "this is App.js is it day time???");

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTempUnit, handleToggleSwitchChange }}
      >
        <Header
          weatherLocation={weatherLocation}
          onCreateModal={handleCreateModal}
          temp={temp}
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
            hello i'm profile in App.js
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={handleAddItemSubmit}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} onDeleteCard={handleDeleteCard} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
