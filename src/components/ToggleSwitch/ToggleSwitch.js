import { useContext} from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
//   console.log("i'm toggle switch");
//   const [currentTempUnit, handleToggleSwitchChange] = useState("F");

//   const handleToggleChange = (e) => {
//     if (currentTempUnit === "C") handleToggleSwitchChange("F");
//     if (currentTempUnit === "F") handleToggleSwitchChange("C");
//   };

const {currentTempUnit, handleToggleSwitchChange} = useContext(CurrentTemperatureUnitContext)
console.log(currentTempUnit, "toggle switch value curent temp unit");  
return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleToggleSwitchChange}    
      />
      <span
        className={
          currentTempUnit === "F"
            ? "switch__slider switch__slider-F "
            : "switch__slider switch__slider-C"
        }
      />
      <p
        className={`switch__temp-F ${
          currentTempUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          currentTempUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;
