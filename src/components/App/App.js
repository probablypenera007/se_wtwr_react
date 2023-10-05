import Header from '../Header/Header';
//import WeatherCard from '../WeatherCard/WeatherCard';
//import defaultClothingItems from '../../utils/DefaultClothing';
//import ItemCard from '../ItemCard/ItemCard';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import "./App.css"



function App() {
  const weatherTemp = 121541512 +"ºF";
  return (
    <div className="App">
     <Header/>
     <Main  weatherTemp = {weatherTemp}/>
    <Footer />
    <ModalWithForm title="New Garment">
      <label>
        name<input type="text" name="name" minlength="1" maxLength="30"/>
      </label>
      <label>
        Image<input type="url" name="link" minlength="1" maxLength="30"/>
      </label>
      <p>Select the weather type:</p>
      <div>
        <div>
          <input type="radio" id="hot" value="hot" />
         <label>HOT </label>
         </div>
         <div>
          <input type="radio" id="warm" value="warm" />
         <label>WARM </label>
         </div>
         <div>
          <input type="radio" id="cold" value="cold" />
         <label>COLD </label>
         </div>
      </div>
    </ModalWithForm>
    </div>
  );
}

export default App;
    