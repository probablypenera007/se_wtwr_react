import { useState, useEffect } from "react";
import Header from "../Header/Header";
//import WeatherCard from '../WeatherCard/WeatherCard';
//import defaultClothingItems from '../../utils/DefaultClothing';
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

function App() {
  //const weatherTemp = "121541512 ºF";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weatherLocation, setWeatherLocation] = useState("");
  const [weatherForecast, setWeatherForecast] = useState("");
  const [isDay, setIsDay] = useState(true);
  const [currentTempUnit, setCurrentTempUnit] = useState("F");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddItem = (e) => {
    e.preventDefault();
    console.log(e, "Add Item success LOOK AT ME!");
    //logic for taking the data from the form
  };

  const handleToggleSwitchChange = () => {
    if (currentTempUnit === "C") setCurrentTempUnit("F");
    if (currentTempUnit === "F") setCurrentTempUnit("C");
  };
  console.log(currentTempUnit, "app.js current temp unit");
  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        console.log(
          temperature,
          "current temperatre in app.js previosuly current weather, debug parsedTemp"
        );
        setTemp(temperature);

        const location = parseLocationData(data);
        setWeatherLocation(location);

        const weatherForecast = parseWeatherForecastData(data);
        setWeatherForecast(weatherForecast, "what is the weatherForecast");

        const isDay = parseTimeOfDay(data);
        setIsDay(isDay);
      })
      .catch(console.error);
    //   .cactch((err) => {
    //     console.error("Error:", err);
    //   })
  }, []);
  console.log(temp, "this is set temp");
  console.log(weatherLocation, "this is APP.js current location");
  console.log(weatherForecast, "this is current weather forecast");
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
            />
          </Route>
          <Route path="/profile">Profile</Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
