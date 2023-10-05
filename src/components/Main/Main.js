import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import defaultClothingItems from "../../utils/DefaultClothing";
import "./Main.css";

function Main({weatherTemp, onSelectCard}) {
    return <main className='main'>
      <WeatherCard day={false} type="cloudynight" weatherTemp={weatherTemp} />
      <section className='card__section'>
        <p className="card__section-title">
        Today is {weatherTemp} / You may want to wear:
        </p>
        <div className='card__items'>
          {defaultClothingItems.map((item) => {
            return <ItemCard key={item._id} item={item} onSelectCard={onSelectCard}/>
          })}
          </div>
      </section>
    </main>;
  }

  export default Main;  