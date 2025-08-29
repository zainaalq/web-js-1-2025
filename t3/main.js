'use script' ;

const sivu1 = prompt('Anna kolmion ensimmaisen sivun pituus:');
const sivu2 = prompt('Anna kolmion toisen sivun pituus:');
const sivu3 = prompt('Anna kolmion kolmannen sivun pituus:');


let tulos;

if (sivu1 === sivu2 && sivu2 === sivu3) {
    tulos = 'kolmio on tasasivuinen';
}

else if ((sivu1 === sivu2 || sivu2 === sivu3) && !(sivu1 === sivu2 && sivu2 === sivu3))
  {
    tulos = 'kolmio on tasakylkinen';
  }

else {
    tulos = 'kolmio on erisivuinen';
}

document.querySelector('#target').innerHTML = tulos;
