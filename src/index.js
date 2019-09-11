import getWeatherInfos from './weather_module';
import {
  celcius2Fahrenheit,
  fahrenheit2celcius,
  fahrenheitButton,
  degreeCelciusButton,
} from './toggle_settings';

document.querySelector('#temp-button-toggle-1').innerHTML = degreeCelciusButton;
document.querySelector('#temp-button-toggle-1').style.display = 'none';

document.querySelector('#temp-button-toggle-2').innerHTML = fahrenheitButton;
document.querySelector('#temp-button-toggle-2').style.display = 'none';

const fahrenheitValue = document.querySelector('#degree-fahrenheit-val');
fahrenheitValue.style.display = 'none';

document.querySelector('body').style.backgroundImage = 'url(assets/default.jpg)';
const weatherLocationForm = document.querySelector('#weather-location-form');
weatherLocationForm.addEventListener('submit', (e) => {
  document.querySelector('#temp-button-toggle-2').style.display = 'none';
  document.querySelector('#temp-button-toggle-1').style.display = 'none';
  const location = document.querySelector('#weather-location-form [name="location"]').value;
  getWeatherInfos(location);
  getWeatherInfos(location, 'imperial');
  e.preventDefault();
});


celcius2Fahrenheit();
fahrenheit2celcius();
