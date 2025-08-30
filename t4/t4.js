'use strict';

const pisteet = +prompt("kirjoitta omat pisteet ");

let arvosana;

if (pisteet>= 0 && pisteet <=  39) {
  arvosana = 0;

} else if (pisteet >= 40 && pisteet <=51){
  arvosana = 1;
}else if (pisteet >= 52 && pisteet <=63){
  arvosana = 2;
}else if (pisteet >= 64 && pisteet <=75){
  arvosana = 3;
}else if (pisteet >= 76 && pisteet <=87){
  arvosana = 4;
}else if (pisteet >= 88 && pisteet <=100){
  arvosana = 5;
}else {
  arvosana = "virheellinen pistemäärä";
}
const teksti = `arvosana on ${arvosana}`;

document.querySelector('#target').innerHTML = teksti;
