import pokemon from '../src/data/pokemon/pokemon.js';
//import pokemon from '../src/data/pokemon/pokemon.js';
import btnPlayPause from '../src/main.js';
/*describe('cartasPokemon', () => {
  it('should render without crashing', () => {
    const card = cartasPokemon();
   // expect(back instanceof HTMLElement).toBe(true);
    expect(grid.appendChild(card)).toBeCalledWith(expect.any(HTMLElement));
  });
});
*/

describe('pokemon', () => {
  it("hola", () => {
 expect(pokemon.items).toBe(pokemon.items);
  });
 });

 describe('game', () => {
  it('should be an object', () => {
    expect(typeof btnPlayPause).toBe(true);
  });
});
  /*
 describe ('cartasPokemon', ( ) => {
  it ('should return an array of cards divs', ( ) =>{
  const cards = cartasPokemon(pokemon);
  expect(cards.length).toBe(pokemon.length);
  });
  });*/