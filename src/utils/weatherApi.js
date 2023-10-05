

const latitude = 44.34;
const longitude = 10.99;
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


//export default weatherApi


//  if (temperature >= 86) {
//      return 'hot';
//    } else if (temperature >= 66 && temperature <= 85) {
//      return 'warm';
//    } else if (temperature <= 65) {
//      return 'cold';
//    }  