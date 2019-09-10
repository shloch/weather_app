import WeatherModule from './weather_module';

document.querySelector('body').style.backgroundImage = 'url(assets/default.jpg)';
const weatherLocationForm = document.querySelector('#weather-location-form');
weatherLocationForm.addEventListener('submit', (e) => {
  const location = document.querySelector('#weather-location-form [name="location"]').value;
  WeatherModule.getWeatherInfos(location);
  WeatherModule.getWeatherInfos(location, 'imperial');
  e.preventDefault();
});
