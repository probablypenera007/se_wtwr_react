import './Header.css';
import wtwrlogo from "../../images/wtwrlogo.svg";

const Header = ({onCreateModal}) => {
    const currentDate = new Date().toLocaleString('default',
     { month: 'long', day: 'numeric' });
    console.log('Header Here!');

    return(
        <header className='header'>
        <div className='header__logo'>
<div>
    <img src={wtwrlogo} alt='logo' />
    </div>
    <div>{currentDate}, Seattle</div>
        </div>
        <div className='header__avatar-logo'>
        <div>
          <button className='header__button-addClothes' type='text'> + Add Clothes</button>
        </div>
        <div className='header__name'>Terrence Tegegne</div>
        <div>
          <img src={require("/Users/firefighterpenera/Desktop/TripleTen Files/se_wtwr_react/src/images/avatar.svg").default} alt="avatar"/>
        </div>
        </div>   
      </header> 
    )
}//{require("/Users/firefighterpenera/Desktop/TripleTen Files/se_wtwr_react/src/images/wtwrlogo.svg").default}

export default Header;
    