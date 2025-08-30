'use strict';

const x1 = prompt('Anna ensimmäinen pisteen x koordinaatti:');
const y1 = prompt('Anna ensimmäinen pisteen y koordinaatti:');
const x2 = prompt('Anna toinen pisteen x koordinaatti:');
const y2 = prompt('Anna toinen pisteen y koordinaatti:');

const etaisyys = Math.sqrt ((x2 - x1)**2 + (y2 - y1)**2)

console.log(etaisyys);

const teksti =`pisteiden etäisyys on ${etaisyys}`;

document.querySelector(`#target`). innerHTML= teksti;
