`use strict`;

const temperatureCelsius = prompt("Anna lämpötila celsiusasteina:");

const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
console.log(temperatureFahrenheit);

const teksti= `Lämpötila fahrenheit-asteina on ${temperatureFahrenheit}`;
document.querySelector('#target').innerHTML = teksti;


