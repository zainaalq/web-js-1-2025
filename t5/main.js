'usre  strict';

const luku =  prompt("Anna positiivinen kokonaisluku");

let  summa = 0;

for  (let i= luku ; i>= 1; i--){
  summa += i;
  console.log(i);


}


document.querySelector("#target").innerHTML =
  `luonnollisten lukujen summa on ${summa}` ;
