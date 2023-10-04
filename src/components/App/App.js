import Header from '../Header/Header';
import WeatherCard from '../WeatherCard/WeatherCard';
import "./App.css"


function App() {
  return (
    <div className="App">
     <Header/>
     <WeatherCard day={false} type="cloudynight"/>

    <section className='card__section'>

    </section>

    </div>
  );
}

export default App;
