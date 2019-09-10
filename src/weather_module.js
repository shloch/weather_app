import {
  celciusDisplay,
  fahrenheitDisplay,
  displayError,
  changeWeatherImg,
  flashInfo,
} from './dom_module';

const WeatherModule = (function theWeatherModuleFunction() {
  const mod = {};
  mod.getWeatherInfos = function collectWeatherFromLocation(location, units = 'metric') {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=617ec88a7d93c5b6ace5a90f054e9838&units=${units}`, { mode: 'cors' })
      .then(response => response.json())
      .then(response => {
        if (units === 'metric') {
          celciusDisplay(response.main.temp);
          changeWeatherImg(response.main.temp);
        } else {
          fahrenheitDisplay(response.main.temp);
        }
        flashInfo(response.name,
          response.weather[0].description,
          response.sys.country,
          response.wind.speed,
          response.weather[0].icon,
          response.name);
      })
      .catch(() => {
        displayError('Whoops! ....No such location');
        throw new Error('Whoops! ....No such location');
      });
  };

  return mod;
}());

export default WeatherModule;
