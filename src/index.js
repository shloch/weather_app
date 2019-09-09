'use strict';


import { WeatherModule, } from './weather_module';

const weatherLocationForm = document.querySelector('#weather-location-form');
weatherLocationForm.addEventListener('submit', (e) => {
  const location = document.querySelector('#weather-location-form [name="location"]').value;
  WeatherModule.getWeatherInfos(location);
  WeatherModule.getWeatherInfos(location, 'imperial'); //fahrenheit
  e.preventDefault();
});



