import pokemon from '../data/pokemon/pokemon.js';
import gameCards from "../js/gameCartasFunction.js"

const game = document.querySelector("#game");
const grid = document.createElement("section"); 
const button = document.querySelector("button");
const btnPlayPauseTwo = document.getElementById("btnPlayPauseTree");


grid.setAttribute("class", "grid");
game.appendChild(grid);

//llamamdo al array
let cartasPokemon = pokemon.items.concat(pokemon.items);
// vuelve las cartas random
cartasPokemon.sort(() => 0.5 - Math.random());
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
grid.addEventListener("click",gameCards.funtionMatch)
button.addEventListener("click", gameCards.resetGame); 
//let sound;
btnPlayPauseTwo.addEventListener("click", gameCards.playPause)

