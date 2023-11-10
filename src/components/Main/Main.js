import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import  React, { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Main({
  weatherTemp,
  onSelectCard,
  isDay,
  weatherForecast,
  clothingItems,
 // currentUser,
  onLikeClick,
}) {

  const currentUser = React.useContext(CurrentUserContext)
 // console.log('currentUser in Main:', currentUser);

 // console.log('Main clothingItems at start:', clothingItems);
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 1000;
  const weatherType = useMemo(() => {
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp <= 65) {
        return "cold";
      }
    } else if (currentTemperatureUnit === "C") {
      if (temp >= 30) {
        return "hot";
      } else if (temp >= 18 && temp < 30) {
        return "warm";
      } else if (temp < 18) {
        return "cold";
      }
    }

  }, [currentTemperatureUnit, temp]);
  // console.log('weatherType:', weatherType);
  // console.log('clothingItems after weathertype:', clothingItems);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather && item.weather.toLowerCase() === weatherType;
  });
  return (
    <main className="main">
      <WeatherCard day={isDay} type={weatherForecast} weatherTemp={temp} />
      <section className="card__section">
        <p className="card__section-title">
          Today is {temp} º{currentTemperatureUnit} / You may want to wear:
        </p>


  <ul className="card__items">
    {filteredCards.map((item) => (
      <ItemCard
      //id={item._id || item.id} 
       key={item._id || item.id}
        item={item}
        onSelectCard={onSelectCard}
      //  currentUser={currentUser}
        onLikeClick={onLikeClick}
       // itemId={item._id || item.id }
      />
    ))}
  </ul>

      </section>
    </main>
  );
}

export default Main;
