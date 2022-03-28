//1) Dichiarazione delle costanti con i vari "div"
const displayContainer = document.querySelector('.display-container');
const buttonContainer = document.querySelector('.button-container');
const numberContainer = document.querySelector('.number-container');

//2) Creazione del display 
let number = document.createElement('p');
let starter = 0;
number.innerHTML = (starter);
numberContainer.appendChild(number);

//3) Creazione dei bottoni
const minus = document.createElement('button');
minus.classList.add('minus');
const reset = document.createElement('button');
reset.classList.add('reset');
const plus = document.createElement('button');
plus.classList.add('plus');

minus.innerHTML = '-';
reset.innerHTML = 'Reset';
plus.innerHTML = '+';

buttonContainer.appendChild(minus);
buttonContainer.appendChild(reset);
buttonContainer.appendChild(plus);

//4) Dichiarazione delle funzioni
function decrease (){
    number.innerHTML = (starter -= 1);
}
function increase (){
    number.innerHTML = (starter += 1);
}
function toStart (){
    number.innerHTML = (starter = 0);
}

//5) Aggiungere la possibilita di usare le funzioni attraverso la tastiera
let keyPress = (e) => {
    if (e.keyCode === 37 || e.keyCode === 40 || e.keyCode === 108)
    decrease();
    else if (e.keyCode === 39 || e.keyCode === 38 || e.keyCode ===107)
    increase();
}

//6) Aggiungere la possibilità di usare le funzioni attraverso il mouse
let wheelFunc = (e) => e.deltaY > 0 ? decrease() : increase();

//7) Aggiungere gli event listeners
minus.addEventListener('click', decrease);
plus.addEventListener('click', increase);
reset.addEventListener('click', toStart);
addEventListener('keyup', keyPress);
number.addEventListener ('wheel', wheelFunc);