const latitude = 61.217381;
const longitude = -149.863129;
const APIkey = `830c7046b70053a5bb6012f04397d976`;

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      // F: `${Math.round(temperature)}ºF`,
      // C: `${Math.round(((temperature - 32) * 5) / 9)}ºC`,
      F: `${Math.round(temperature)}`,
      C: `${Math.round(((temperature - 32) * 5) / 9)}`,
    },
  };
  return weather;
};

export const parseLocationData = (data) => {
  const currentLocation = data.name;
  return currentLocation;
};

export const parseWeatherForecastData = (data) => {
  const weather = data.weather;
  const forecast = weather && weather[0].main.toLowerCase();
  return forecast;
};

export const parseTimeOfDay = (data) => {
  const currentTime = Date.now();
  const timeOfDay = data.sys;
  const sunrise = timeOfDay.sunrise * 1000;
  const sunset = timeOfDay.sunset * 1000;
  if (currentTime > sunrise && currentTime < sunset) {
    return true;
  } else {
    return false;
  }
};
