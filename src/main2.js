//import App from './components/App.js';
import pokemon from '../data/pokemon/pokemon.js';
/*
let gameGrid = pokemon.items.concat(pokemon.items).sort(
    function (){
        return 0.5 -  Math.random();
    },
);
let firstGuess = "";
let secondGuess = "";
let count = 0 ;
let previousTarget = null;
let movimientoCard = 1100;

let game = document.getElementById("game");
let grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

gameGrid.forEach(function(item){
    let id = item.id,
     image = item.image

  let card = document.createElement('div');
  card.classList.add('card');
  card.dataset.id = id;

  let front = document.createElement('div');
  front.classList.add('front');

  let back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + image + ')';
  back.innerText = item.id;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back)

  const match = function match() {
    let selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
    card.classList.add('match');
    });
  };
  
  let resetGuesses = function resetGuesses() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;
  
    let selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.remove('selected');
    });
  };
  
  grid.addEventListener('click', function (event) {
  
    let clicked = event.target;
  
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget ||
     clicked.parentNode.classList.contains('selected') ||
     clicked.parentNode.classList.contains('match')) {
      return;
    }
  
    if (count < 2) {
      count++;
      if (count === 1) {
        firstGuess = clicked.parentNode.dataset.id;
        console.log(firstGuess);
        clicked.parentNode.classList.add('selected');
      } else {
        secondGuess = clicked.parentNode.dataset.id;
        console.log(secondGuess);
        clicked.parentNode.classList.add('selected');
      }
  
      if (firstGuess && secondGuess) {
        if (firstGuess === secondGuess) {
          setTimeout(match, movimientoCard);
        }
        setTimeout(resetGuesses, movimientoCard);
      }
      previousTarget = clicked;

    }
  });
});
*/


const game = document.querySelector("#game");
const grid = document.createElement("section");
const span = document.querySelector("span");
const button = document.querySelector("button");

grid.setAttribute("class", "grid");

game.appendChild(grid);

let count = 0;
let firstGuess = "";
let secondGuess = "";

let previousTarget = null;
let delay = 1200;
let moveCount = 0;
let countCardFlipped = 0;

//const status = document.getElementById("status")
let status = 10;
//llamamdo al array
let gameGrid = pokemon.items.concat(pokemon.items);

// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random());
/*
let sec = 0;
let min = 0;
let remainingPairs = 8;

function startTimer() {
  const interval = setInterval(function() {
    sec = checkTime(sec);
      document.getElementById("timer").innerHTML = `${min}:${sec}`;
      sec ++;
      if (sec == 60) {
        min ++;
        sec = 0;
      }
      if (remainingPairs == 0) {
        clearInterval(interval);
      }
  }, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const timerToDom = document.getElementById("timerToDom");
let time; 
let minutes = 0;
 let seconds = 0;
function startTimer() {

	time = setInterval(function() {

        seconds++;
        
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        timerToDom.textContent = minutes + ":" + seconds ;
        
    }, 1000);
}

*/
gameGrid.forEach((item) => {
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
    // The event target is our clicked item
    let clicked = event.target;
  
    // Do not allow the grid section itself to be selected; only select divs inside the grid
    if (clicked.tagName === 'SECTION' || clicked === previousTarget || 
        clicked.parentElement.classList.contains("match")) {
        return;
        
    }
  
    if (count < 2) {
        count++;
        if (count === 1) {
            // Assign first guess
            firstGuess = clicked.parentElement.dataset.id;
            clicked.parentElement.classList.add('selected');
        } else {
            // Assign second guess
            secondGuess = clicked.parentElement.dataset.id;
            clicked.parentElement.classList.add('selected');
        }
        // If both guesses are not empty...
        if (firstGuess !== '' && secondGuess !== '') {
            // and the first guess matches the second match...
            if (firstGuess === secondGuess) {
                countCardFlipped++;
                // run the match function
                const image = "image/" + clicked.parentElement.dataset.id + ".jpg";
                setTimeout(match(image), delay);
                setTimeout(resetGuesses, delay);
            }
            else {
                setTimeout(resetGuesses, delay);
              //  console.log("hola")
                if(status ==0){
                  alert("ff")

                }else{
                  status = status-1;
                  console.log("menos vida")
                }
                /*if(status == 0){
                  alert("perdiste")
                }else{
                  status = status-1;
                  console.log(status);
                }*/
            }
        }
        previousTarget = clicked;
    }
    if(countCardFlipped === 9) {
      setTimeout(finishMessage, 1000);
    }
    moveCount++;
    span.innerText = moveCount;
    win();
   //startTimer();
});

// Add match CSS
const match = (image) => {
    let selected = document.querySelectorAll('.selected')
    selected.forEach(card => {
      card.classList.add('match')
      //card.style.backgroundImage = `url(${image})`;
    });
}

const resetGuesses = () => {
    firstGuess = "";
    secondGuess = "";
    count = 0;
    previousTarget = null;
  
    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
      card.classList.remove('selected');
    });
}

const saveScoreToStorage = (score) => {
  const lowestScore = JSON.parse(localStorage.getItem("SCORE"));
  const playerScore = [{bestScore: score}];

  if(lowestScore) {
    if(lowestScore.score < playerScore.score) {
      return;
    }
    else {
      localStorage.removeItem("SCORE");
      localStorage.setItem("SCORE", JSON.stringify(playerScore));
      return score;
    }
  }
  else {
    localStorage.setItem("SCORE", JSON.stringify(playerScore));
    return JSON.parse(localStorage.getItem("SCORE")).dataset.score;
  }
}


const resetGame = () => {
  window.location.reload();
}

const finishMessage = () => {
  alert(`Tu puntuacion mas baja es: ${saveScoreToStorage(moveCount)}
  `);
}

function win () {
	if (countCardFlipped === 6) {
		setTimeout(() => {
			document.getElementById("youWin").style.display = "flex";
		}, 1000);
	}
}


button.addEventListener("click", resetGame); 

////////////////
//const iniciaCronometro = document.getElementById("iniciaCronometro");
iniciaCronometro.addEventListener("click",function(){
  let segundos = 0;
  let minutos = 4;
  let segundosTexto;
  let minutosTexto;

  function actualizaContador() {
    segundos--;
    if (segundos < 0) {
      segundos = 59;
      minutos--;
    }
    if (minutos < 0) {
      segundos = 0;
      minutos = 0;
      clearInterval(cronometro);
     
    }
    segundosTexto = segundos;
    minutosTexto = minutos;
    if (segundos < 10) {
      segundosTexto = "0" + segundos;
    }
    if (minutos < 10) {
      minutosTexto = "0" + minutos;
    }
    document.querySelector("#minutos").innerText = minutosTexto;
    document.querySelector("#segundos").innerText = segundosTexto;
  }
 let cronometro = setInterval(actualizaContador, 1000);
})
/*
 function iniciaCronometro() {
  let segundos = 0;
  let minutos = 4;
  let segundosTexto;
  let minutosTexto;

  function actualizaContador() {
    segundos--;
    if (segundos < 0) {
      segundos = 59;
      minutos--;
    }
    if (minutos < 0) {
      segundos = 0;
      minutos = 0;
      clearInterval(cronometro);
     
    }
    segundosTexto = segundos;
    minutosTexto = minutos;
    if (segundos < 10) {
      segundosTexto = "0" + segundos;
    }
    if (minutos < 10) {
      minutosTexto = "0" + minutos;
    }
    document.querySelector("#minutos").innerText = minutosTexto;
    document.querySelector("#segundos").innerText = segundosTexto;
  }
 let cronometro = setInterval(actualizaContador, 1000);
}*/
//iniciaCronometro();