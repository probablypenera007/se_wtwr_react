//import cloudyday from "../../images/day/cloudy-day.svg";
import "./WeatherCard.css";


const weatherOptions = [
    { url: require("../../images/day/cloudy-day.svg").default, day: true, type: "cloudyday"},
    { url: require("../../images/day/perfect-day.svg").default, day: true, type: "perfday"},
    { url: require("../../images/day/rainy-day.svg").default, day: true, type: "rainyday"},
    { url: require("../../images/day/stormy-day.svg").default, day: true, type: "stormyday"},
    { url: require("../../images/day/snowy-day.svg").default, day: true, type: "snowyday"},
    { url: require("../../images/day/foggy-day.svg").default, day: true, type: "foggyday"},
    { url: require("../../images/night/perfect-night.svg").default, day: false, type: "perfnight"},
    { url: require("../../images/night/cloudy-night.svg").default, day: false, type: "cloudynight"},
    { url: require("../../images/night/foggy-night.svg").default, day: false, type: "foggynight"},
    { url: require("../../images/night/rainy-night.svg").default, day: false, type: "rainynight"},
    { url: require("../../images/night/snowy-night.svg").default, day: false, type: "snowynight"},
    { url: require("../../images/night/stormy-night.svg").default, day: false, type: "stormynight"},
]



const WeatherCard = ({day, type, weatherTemp=''}) => {
    console.log("Weather Me Softly");
    const imageSrc = weatherOptions.filter((i) => {
        console.log(i)
        return i.day === day && i.type === type;
    }); 
    console.log(imageSrc);
    console.log(imageSrc[0].url)
    const imageSrcUrl = imageSrc[0].url || "";



    return (
        <section className="weather__section">
            <div className="weather__temp">{weatherTemp}</div>
            <img src={imageSrcUrl} className="weather__iamge" alt="weather img" />
        </section>
    )
}

export default WeatherCard;