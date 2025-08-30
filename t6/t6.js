'use strict';

const posetiivinenluku = +prompt("Anna positiivinen luku:");

let taulukko='';

for( let i= 1; i <= posetiivinenluku; i++){
  for(let j = 1; j <= posetiivinenluku; j++){
    taulukko += i * j + ' ';


  }
  taulukko += '<br>';

}

console.log(taulukko);
document.querySelector('#target').innerHTML= taulukko;
