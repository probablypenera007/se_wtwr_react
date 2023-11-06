import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherTemp,
  onSelectCard,
  isDay,
  weatherForecast,
  clothingItems,
}) {
  console.log('Main clothingItems at start:', clothingItems);
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
  console.log('weatherType:', weatherType);
  console.log('clothingItems after weathertype:', clothingItems);

  const filteredCards = Array.isArray(clothingItems) ? clothingItems?.filter((item) => {
    console.log("Filtering item with weatherType:", weatherType, "Item's weather:", item.weather);
    return item.weather.toLowerCase() === weatherType;
   

    // const weather = item.weather;
    // return weather && typeof weather === 'string' && weather.toLowerCase() === weatherType;
  }) : [];

  return (
    <main className="main">
      <WeatherCard day={isDay} type={weatherForecast} weatherTemp={temp} />
      <section className="card__section">
        <p className="card__section-title">
          Today is {temp} º{currentTemperatureUnit} / You may want to wear:
        </p>
        <div className="card__items">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
