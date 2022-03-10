//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
 import pokemon from '../data/pokemon/pokemon.js';
 console.log(pokemon);

 const imagenes = document.createElement("img");
 imagenes.src = pokemon.items[4].image;
 document.getElementById("imagenes").appendChild(imagenes);
 /*
 const imagenes = document.createElement("img");
 imagenes.src = pokemon.items[8].image;
 document.getElementById("imagenes").appendChild(imagenes);

 const venusaur = document.createElement("img");
 venusaur.src = pokemon.items[2].image;
 document.getElementById("venusaur").appendChild(venusaur);

/*
let dataPokemon = pokemon.items.concat(pokemon.items);
for (let i of dataPokemon) {
 const divImg= document.createElement("div");
 const imgPokemon = document.createElement("img");
 let idPokemon = document.createElement("p");
 imgPokemon.src = i.image;
 idPokemon.innerText = i.id;
 divImg.setAttribute("class","cover");
 document.getElementById("group2").appendChild(divImg);
 divImg.appendChild(imgPokemon);
 divImg.appendChild(idPokemon);
}
 */
 
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//


const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
<<<<<<< HEAD
  el.textContent = 'Hola mundo!';
=======
  el.textContent = '';

>>>>>>> 73367e8db68973dbc0f5981b07128d1348ee6c9d
  return el;
};

export default App; 
