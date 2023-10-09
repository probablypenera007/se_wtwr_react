
import { weatherOptions } from "../../utils/WeatherOptions";
import "./WeatherCard.css";
import "../App/App";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.find((i) => {
    return i.day === day && i.type === type;
  });
  const imageSrcUrl = imageSrc ? imageSrc.url : "";
  return (
    <section className="weather__section">
      <div className="weather__temp">{weatherTemp}ºF</div>
      <img src={imageSrcUrl} className="weather__image" alt={type} />
    </section>
  );
};

export default WeatherCard;
