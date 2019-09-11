const fahrenheitButton = '<button id="fahrenheitButton" type="button">Display in Fahrenheit</button>';
const degreeCelciusButton = '<button id="degreeCelciusButton" type="button">Display in Degree Celcius</button>';

function celcius2Fahrenheit() {
  const fahButton = document.querySelector('#fahrenheitButton');
  fahButton.addEventListener('click', (e) => {
    const celciusButton = document.querySelector('#temp-button-toggle-1');
    const fahButonDivButton = document.querySelector('#temp-button-toggle-2');
    const fahrenheitValue = document.querySelector('#degree-fahrenheit-val');
    const celciusValue = document.querySelector('#degree-celcius-val');
    celciusValue.style.display = 'none';
    fahrenheitValue.style.display = 'block';
    celciusButton.style.display = 'block';
    fahButonDivButton.style.display = 'none';
    e.preventDefault();
  });
}
function fahrenheit2celcius() {
  const celButton = document.querySelector('#degreeCelciusButton');
  celButton.addEventListener('click', (e) => {
    const fahrenhButton = document.querySelector('#temp-button-toggle-2');
    const celciusButton = document.querySelector('#temp-button-toggle-1');
    const fahrenheitValue = document.querySelector('#degree-fahrenheit-val');
    const celciusValue = document.querySelector('#degree-celcius-val');
    celciusValue.style.display = 'block';
    fahrenheitValue.style.display = 'none';
    celciusButton.style.display = 'none';
    fahrenhButton.style.display = 'block';
    e.preventDefault();
  });
}

export {
  celcius2Fahrenheit,
  fahrenheit2celcius,
  fahrenheitButton,
  degreeCelciusButton,
};
