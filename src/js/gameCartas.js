//import App from './components/App.js';
import pokemon from '../data/pokemon/pokemon.js';

const game = document.querySelector("#game");
const grid = document.createElement("section");
const span = document.querySelector("span");
const button = document.querySelector("button");

grid.setAttribute("class", "grid");

game.appendChild(grid);

let count = 0;
let primeraCarta = "";
let segundaCarta = "";

let previousTarget = null;
let delay = 1200;
let moveCount = 0;
let countCardFlipped = 0;

let movimientosDeError = 10;
//llamamdo al array
let cartasPokemon = pokemon.items.concat(pokemon.items);
// vuelve las cartas random
cartasPokemon.sort(() => 0.5 - Math.random());
//borrar
console.log(cartasPokemon);
cartasPokemon.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = item.id;

    const front = document.createElement("div");
    front.classList.add("front");

    const back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = `url(${item.image})`;
    back.innerText = item.id;

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});

// Add event listener to grid
grid.addEventListener('click', function(event) {
    let clicked = event.target;
    if (clicked.tagName === 'SECTION' || clicked === previousTarget || 
        clicked.parentElement.classList.contains("match")) {
        return;
    }
    if (count < 2) {
        count++;
        if (count === 1) {
            primeraCarta = clicked.parentElement.dataset.id;
            clicked.parentElement.classList.add('selected');
            //empieza el contador
            if (minutos === 0 && segundos === 0) {
              startTimer();
            }            
        } else {
            segundaCarta = clicked.parentElement.dataset.id;
            clicked.parentElement.classList.add('selected');
        }
        if (primeraCarta !== '' && segundaCarta !== '') {
            if (primeraCarta === segundaCarta) {
                countCardFlipped++;
                //funcion match
                const image = "image/" + clicked.parentElement.dataset.id + ".jpg";
                setTimeout(match(image), delay);
                setTimeout(resetGuesses, delay);
            }
            else {
                setTimeout(resetGuesses, delay);
                //cantidad de movimientos disponibles
                if(movimientosDeError ==0){
                  //alerta cuando pierdes
                  swal({
                    title: "PERDISTE !!!!!",
                    text: "Te quedaste sin movimientos",
                    icon: "error",
                    buttons:["volver a Intentarlo?" , "Volver al Inicio"],               
                  })
                  .then((result) => {
                    if(result){
                    location.href=("../index.html")
                    }else{
                      window.location.reload()
                    }
                    console.log(result)
                  })
                  //va diminuyendo las vidas
                }else{
                  movimientosDeError = movimientosDeError-1;
                  console.log("menos vida")
                }
                
            }
        }
        previousTarget = clicked;
    }
    //cantidad de cartas para ganar
    if(countCardFlipped === 9) {
      setTimeout(finishMessage, 1000);
    }
    moveCount++;
    span.innerText = moveCount;
});

const match = () => {
    let selected = document.querySelectorAll('.selected')
    selected.forEach(card => {
      card.classList.add('match')
    });
}

const resetGuesses = () => {
    primeraCarta = "";
    segundaCarta = "";
    count = 0;
    previousTarget = null;
  
    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
      card.classList.remove('selected');
    });
}
//alert si ganas
const finishMessage = () => {
  swal({
    title: "GANASTE !!!!",
    text: `Lo lograstes con ${moveCount} movimientos ,
     en un tiempo de: ${minutos}:${segundos} `,
    icon: "success",
    buttons: ["volver a Jugar" , "Volver al Inicio"],
    dangerMode: true,
  })
  .then((result) => {
    if(result){
    location.href=("../index.html")
    }else{
      window.location.reload()
    }
    console.log(result)
  })
}
/// temporizador
let segundos = 0;
let minutos = 0;

function startTimer() {
  const interval = setInterval(function() {
    segundos = checkTime(segundos);
      document.getElementById("timer").innerHTML = `Tiempo ${minutos}:${segundos}`;
      segundos ++;

      if (segundos == 60) {
        minutos ++;
        segundos = 0;
      }
  }, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
//function reset
const resetGame = () => {
    window.location.reload();
}
//boton reset
button.addEventListener("click", resetGame); 

//////
let sound;
const btnPlayPauseTwo = document.getElementById("btnPlayPauseTree");
btnPlayPauseTwo.addEventListener("click", playPause)
function playPause(){
    let v = document.getElementsByTagName("audio")[0];
   if (!sound) {
     v.play();
    sound = true;
    }

   else {
    v.pause();
    sound = false;
   }

};
