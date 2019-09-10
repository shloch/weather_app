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
  const info1 = document.querySelector('.info-1');
  info1.innerHTML = `${temperature}  &#8451 `;
}

function fahrenheitDisplay(temperature) {
  document.querySelector('.flash').innerHTML = '';
  const info2 = document.querySelector('.info-2');
  info2.innerHTML = `${temperature}  &#8457 `;
}

function displayError(err) {
  document.querySelector('body').style.backgroundImage = 'url(assets/default.jpg)';
  document.querySelector('.info-1').innerHTML = '';
  document.querySelector('.info-2').innerHTML = '';
  const flash = document.querySelector('.flash');
  flash.innerHTML = err;
}

function flashInfo(location, description, country, windSpeed, weatherIcon, city) {
  const flashMsg = `<h2> Location : ${location} </h2> <br/>
    Description : ${description} <br/>
    Wind Speed : ${windSpeed} meter/second <br/>
    City : ${city} (${country}) <br/>
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
