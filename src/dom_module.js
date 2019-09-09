'use strict';


function changeWeatherImg(temperature) {
  let bgImages = { cold: 'assets/cold-weather.jpg', warm: 'assets/warm-weather.jpg', hot: 'assets/hot-weather.jpg' }
  let b = document.querySelector('body');
  if (temperature < 16) {
    b.style.backgroundImage = 'url(' + bgImages.cold + ')';
  } else if (temperature < 29) {
    b.style.backgroundImage = 'url(' + bgImages.warm + ')';
  } else if (temperature > 29) {
    b.style.backgroundImage = 'url(' + bgImages.hot + ')';
  } else {
    b.style.backgroundImage = 'url(' + bgImages.warm + ')';
  }
}

function celciusDisplay(temperature) {
  document.querySelector('.flash').innerHTML = '';
  const info1 = document.querySelector('.info-1');
  info1.innerHTML = temperature + '  &#8451 ';
}

function fahrenheitDisplay(temperature) {
  document.querySelector('.flash').innerHTML = '';
  const info2 = document.querySelector('.info-2');
  info2.innerHTML = temperature + ' &#8457 ';
}

function displayError(err) {
  document.querySelector('body').style.backgroundImage = 'none';
  document.querySelector('.info-1').innerHTML = '';
  document.querySelector('.info-2').innerHTML = '';
  const flash = document.querySelector('.flash');
  flash.innerHTML = err + '<br/><br/>';
}

function flashInfo(location, description, country) {
  let flashMsg =
    `<h2> Location : ${location} </h2> <br/>
    Description : ${description} <br/>
    Country : ${country}`;
  document.querySelector('.flash').innerHTML = flashMsg;
}

export { celciusDisplay, fahrenheitDisplay, displayError, changeWeatherImg, flashInfo };