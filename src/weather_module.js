'use strict';

import { celciusDisplay, fahrenheitDisplay, displayError, changeWeatherImg, flashInfo } from './dom_module';

const WeatherModule = (function theWeatherModuleFunction() {
  const mod = {};
  mod.getWeatherInfos = function collectWeatherFromLocation(location, units = 'metric') {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=617ec88a7d93c5b6ace5a90f054e9838&units=${units}`, { mode: 'cors' })
      .then(function (response) {

        return response.json();
      })
      .then(function (response) {
        if (units == 'metric') {
          celciusDisplay(response.main.temp);
          changeWeatherImg(response.main.temp);

        } else {
          fahrenheitDisplay(response.main.temp);
        }
        flashInfo(response.name, response.weather.description, response.sys.country);

      })
      .catch(function () {
        displayError('Whoops! ....No such location');
        throw new Error('Whoops! ....No such location');
      });

    return
  };

  return mod;
}());

export {
  WeatherModule,
};