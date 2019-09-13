import {
  celciusDisplay,
  fahrenheitDisplay,
  displayError,
  changeWeatherImg,
  flashInfo,
} from './dom_module';

export default function getWeatherInfos(location, units = 'metric') {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=617ec88a7d93c5b6ace5a90f054e9838&units=${units}`, { mode: 'cors' })
    .then(response => response.json())
    .then((response) => {
      if (units === 'metric') {
        celciusDisplay(response.main.temp);
        changeWeatherImg(response.main.temp);
      } else {
        fahrenheitDisplay(response.main.temp);
      }

      const {
        weather: [{ description, icon }],
        wind: { speed },
        sys: { country },
        name,
      } = response;

      flashInfo(name, description, country, speed, icon);
    })
    .catch(() => {
      displayError('Whoops! ....No such location');
      throw new Error('Whoops! ....No such location');
    });
}
