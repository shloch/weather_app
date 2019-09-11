function changeWeatherImg(temperature) {
  const bgImages = {
    cold: 'assets/cold-weather.jpg',
    warm: 'assets/warm-weather.jpg',
    very_warm: 'assets/very-warm-weather.jpg',
    hot: 'assets/hot-weather.jpg',
    default: 'assets/default.jpg',
  };
  const b = document.querySelector('body');
  if (temperature < 16) {
    b.style.backgroundImage = `url(${bgImages.cold})`;
  } else if (temperature < 25) {
    b.style.backgroundImage = `url(${bgImages.warm})`;
  } else if (temperature < 33) {
    b.style.backgroundImage = `url(${bgImages.very_warm})`;
  } else if (temperature > 33) {
    b.style.backgroundImage = `url(${bgImages.hot})`;
  } else {
    b.style.backgroundImage = `url(${bgImages.default})`;
  }
}

function celciusDisplay(temperature) {
  document.querySelector('.flash').innerHTML = '';
  const info1 = document.querySelector('#degree-celcius-val');
  info1.innerHTML = `${temperature}  &#8451 `;
  document.querySelector('#temp-button-toggle-2').style.display = 'block';
}

function fahrenheitDisplay(temperature) {
  document.querySelector('.flash').innerHTML = '';
  const info2 = document.querySelector('#degree-fahrenheit-val');
  info2.innerHTML = `${temperature}  &#8457 `;
}

function displayError(err) {
  document.querySelector('body').style.backgroundImage = 'url(assets/default.jpg)';
  document.querySelector('#degree-celcius-val').innerHTML = '';
  document.querySelector('#degree-fahrenheit-val').innerHTML = '';
  document.querySelector('#temp-button-toggle-2').style.display = 'none';
  document.querySelector('#temp-button-toggle-1').style.display = 'none';
  const flash = document.querySelector('.flash');
  flash.innerHTML = err;
}

function flashInfo(location, description, country, windSpeed, weatherIcon) {
  const flashMsg = `<h2> Location : ${location} </h2> <br/>
    Description : ${description} <br/>
    Wind Speed : ${windSpeed} meter/second <br/>
    City : ${location} (${country}) <br/>
    <img src='http://openweathermap.org/img/w/${weatherIcon}.png' alt=''/>`;
  document.querySelector('.flash').innerHTML = flashMsg;
}

export {
  celciusDisplay,
  fahrenheitDisplay,
  displayError,
  changeWeatherImg,
  flashInfo,
};
