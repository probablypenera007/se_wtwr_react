import Header from '../Header/Header';
import WeatherCard from '../WeatherCard/WeatherCard';
import defaultClothingItems from '../../utils/DefaultClothing';
import ItemCard from '../ItemCard/ItemCard';
import "./App.css"



function App() {
  return (
    <div className="App">
     <Header/>
     <main className='main'>
     <WeatherCard day={false} type="cloudynight"/>
    <section className='card__section'>
      {defaultClothingItems.map((item) => {
       return <ItemCard item = {item} />
      })}

    </section>
</main>
    </div>
  );


}

export default App;
