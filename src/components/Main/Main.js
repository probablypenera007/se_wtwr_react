import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import defaultClothingItems from "../../utils/DefaultClothing";
import "./Main.css";

function Main({weatherTemp}) {
    return <main className='main'>
      <WeatherCard day={false} type="cloudynight" weatherTemp={weatherTemp} />
      <section className='card__section'>
        <p className="card__section-title">
        Today is {weatherTemp} / You may want to wear:
        </p>
        <div className='card__items'>
          {defaultClothingItems.map((item) => {
            return <ItemCard item={item} />;
          })}</div>

      </section>
    </main>;
  }

  export default Main;  