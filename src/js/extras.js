// Add event listener to grid
const span = document.querySelector("span");
let count = 0;
let primeraCarta = "";
let segundaCarta = "";
let previousTarget = null;

let delay = 1200;
let moveCount = 0;
let countCardFlipped = 0;

let movimientosDeError = 10;

let segundos = 0;
let minutos = 0;
//let swal;
let sound;
let v = document.getElementsByTagName("audio")[0];
//llamamdo al array
//let cartasPokemon = pokemon.items.concat(pokemon.items);



const gameCards ={
 funtionMatch:function(event) {
  /////
  let clicked = event.target;
    if (clicked.tagName === 'SECTION' || clicked === previousTarget ||
        clicked.parentElement.classList.contains("match"))
        {
        return;
    }
    if (count < 2) {
        count++;
        if (count === 1) {
            primeraCarta = clicked.parentElement.dataset.id;
            clicked.parentElement.classList.add('selected');
            //empieza el contador
            if (minutos === 0 && segundos === 0) {
              gameCards.startTimer();
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
                setTimeout(gameCards.cardMatch(image), delay);
                setTimeout(gameCards.resetGuesses, delay);
            }
            else {
                setTimeout(gameCards.resetGuesses, delay);
                //cantidad de movimientos disponibles
                if(movimientosDeError ==0){
                  //alerta cuando pierdes
                  swal({
                    title: "UPS!",
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
                  })
                  //va diminuyendo las vidas
                }else{
                  movimientosDeError = movimientosDeError-1;
                 // console.log("menos vida")
                }
            }
        }
        previousTarget = clicked;
    }
    //cantidad de cartas para ganar
    if(countCardFlipped === 9) {
      setTimeout(gameCards.finishMessage, 1000);
    }
    moveCount++;
    span.innerText = moveCount;
},
////////////////////////
cardMatch: function(){
    let selected = document.querySelectorAll('.selected')
    selected.forEach(card => {
      card.classList.add('match')
    })
},
//resetear
resetGuesses:
 function(){
  primeraCarta = "";
  segundaCarta = "";
  count = 0;
  previousTarget = null;

    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
      card.classList.remove('selected');
    });
} ,
//alerta si ganas
finishMessage:function () {
  swal({
    title: "GANASTE!",
    text: `Lo lograste con ${moveCount} movimientos ,
     en un tiempo de: ${minutos}:${segundos} `,
    icon: "success",
    buttons: ["volver a Jugar" , "Volver al Inicio"],
    dangerMode: true,
  })
  .then((result) => {
    //volver al inicio
    if(result){
    location.href=("../index.html")
    }else{
      //volver a jugar
      window.location.reload()
    }
  })
},
//temporizador
startTimer:function () {
   setInterval(function() {
    segundos = gameCards.checkTime(segundos);
      document.getElementById("timer").innerHTML = `Tiempo ${minutos}:${segundos}`;
      segundos ++;
      if (segundos == 60) {
        minutos ++;
        segundos = 0;
      }
  }, 1000);
},
checkTime:function(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
},
//funcion resetear
resetGame:function(){
    window.location.reload();
},
//sonido
playPause:function (){
if (!sound) {
 v.play();
sound = true;
}
else {
v.pause();
sound = false;
    }
   }
  };
export default gameCards;
