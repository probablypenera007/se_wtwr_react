import Header from '../Header/Header';
import WeatherCard from '../WeatherCard/WeatherCard';
import defaultClothingItems from '../../utils/DefaultClothing';
import ItemCard from '../ItemCard/ItemCard';
import "./App.css"



function App() {
  const weatherTemp = `${1564151165+"ºF"}`;
  return (
    <div className="App">
     <Header/>
     <main className='main'>
     <WeatherCard day={false} type="cloudynight" weatherTemp={weatherTemp} />
    <section className='card__section'>
     Today is {weatherTemp}ºF / You may want to wear: 
     <div className='card__items'> 
      {defaultClothingItems.map((item) => {
       return <ItemCard item = {item} />
      })}</div>

    </section>
</main>
    </div>
  );


}

export default App;
