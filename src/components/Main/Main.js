import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import defaultClothingItems from "../../utils/DefaultClothing";
import "./Main.css";
import { useMemo , useContext} from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";



function Main({ weatherTemp, onSelectCard, isDay, weatherForecast }) {
  const {currentTempUnit} = useContext(CurrentTemperatureUnitContext)
  console.log(currentTempUnit, "this is current temp unit in main.js");

  const temp = weatherTemp?.temperature?.[currentTempUnit]|| 1000;
  const weatherType = useMemo(() => {
  
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) { 
      return "warm"; 
    } else if (temp <= 65) {
      return "cold";
    }
  }, [weatherTemp, temp, currentTempUnit]);
  console.log(weatherType, "I'm weather type");

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard
        day={isDay}
        type={weatherForecast}
        weatherTemp={temp}
      />
      <section className="card__section">
        <p className="card__section-title">
          Today is {temp}ºF / You may want to wear:
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
