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
    <ModalWithForm title="New Garment">children </ModalWithForm>
    </div>
  );
}

export default App;
    