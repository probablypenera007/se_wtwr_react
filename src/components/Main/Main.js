import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import defaultClothingItems from "../../utils/DefaultClothing";
import "./Main.css";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, isDay, weatherForecast }) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(currentTempUnit, "inside main.js before usememo");
  const temp = weatherTemp?.temperature?.[currentTempUnit] || 1000;
  console.log(temp, "check value of temp in main.js before useMemo");

  const weatherType = useMemo(() => {
    if (currentTempUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp <= 65) {
        return "cold";
      }
    } else if (currentTempUnit === "C") {
      if (temp >= 30) {
        return "hot";
      } else if (temp >= 18 && temp < 30) {
        return "warm";
      } else if (temp < 18) {
        return "cold";
      }
    }
  }, [currentTempUnit, temp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    console.log(weatherType, "I'm weather type clothes");
    return item.weather.toLowerCase() === weatherType;
  });

 

  return (
    <main className="main">
      <WeatherCard day={isDay} type={weatherForecast} weatherTemp={temp} />
      <section className="card__section">
        <p className="card__section-title">
          Today is {temp} / You may want to wear:
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
