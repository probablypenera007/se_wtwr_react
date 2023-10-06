import './Header.css';
import wtwrlogo from "../../images/wtwrlogo.svg";

const Header = ({onCreateModal, weatherLocation}) => {
    const currentDate = new Date().toLocaleString('default',
     { month: 'long', day: 'numeric' });
    console.log('Header Here!');

    return(
        <header className='header'>
        <div className='header__logo'>
<div>
    <img src={wtwrlogo} alt='logo' />
    </div>
    <div className='header__date'>{currentDate}, {weatherLocation}</div>
        </div>
        <div className='header__avatar-logo'>
        <div>
          <button className='header__button-addClothes' type='text'onClick={onCreateModal}> + Add Clothes</button>
        </div>
        <div className='header__name'>Terrence Tegegne</div>
        <div>
          <img src={require("../../images/avatar.svg").default} alt="avatar"/>
        </div>
        </div>   
      </header> 
    )
}

export default Header;
    