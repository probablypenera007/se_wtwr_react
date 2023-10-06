

const latitude = 47.60;
const longitude = -122.33;
const APIkey = `830c7046b70053a5bb6012f04397d976`;

export const getForecastWeather =() => { 
    const weatherApi = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`)
    .then((res) => {if(res.ok){
        if(res.ok) {
            return res.json();
        }else {
            return Promise.reject(`Error: ${res.status}`)
        }
    }})
    return weatherApi;
}

export const parseWeatherData = (data) => {
    console.log(data)
    const main = data.main;

    const temperature= main && main.temp;
    console.log("this temperature data", Math.ceil(temperature));
    return Math.ceil(temperature);
}

export const parseLocationData = (data) => {
    const currentLocation = data.name;
    console.log(currentLocation, "this is current location");
    return currentLocation;
}

//export const weatherForecastData = (data) => {
//    const currentForecast = data.weather;
//    console.log(currentForecast, "this is current forecast");
//    return currentForecast;
//}

//export

//    "weather": [
//    {
//        "id": 500,
//        "main": "Rain",
//        "description": "light rain",
//        "icon": "10n"
//    }
// ],


//"dt": 1661870592,
//"sys": {
//    "type": 2,
//    "id": 2075663,
//    "country": "IT",
//    "sunrise": 1661834187,
//    "sunset": 1661882248
//  },

//For determining the time of day, you can compare Date.now() 
//to the sunrise and sunset fields returned by the API. 
//But be careful: Date.now() returns the time elapsed since January 1, 1970 in milliseconds. 
//The weather API returns the time elapsed since January 1, 1970 in seconds.

//export default weatherApi


//  if (temperature >= 86) {
//      return 'hot';
//    } else if (temperature >= 66 && temperature <= 85) {
//      return 'warm';
//    } else if (temperature <= 65) {
//      return 'cold';
//    }  