//import pokemon from '../src/data/pokemon/pokemon.js';
import gameCards from '../src/js/extras.js';

describe('game', () => {
describe('funtionMatch is funtion?', ()=>{
  it('should be a function', ()=>{
    expect(typeof gameCards.funtionMatch).toBe('function');
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => gameCards.funtionMatch()).toThrow(TypeError);
    expect(() => gameCards.funtionMatch(0)).toThrow(TypeError);
  //  expect(() => gameCards.funtionMatch(null, [])).toThrow(TypeError);
    expect(() => gameCards.funtionMatch(0, 0)).toThrow(TypeError);
  });  
});
///////
describe('game.rotateCard', () => {
  it('should be a function', () => {
    expect(typeof gameCards.resetGuesses).toBe('function');
  });
  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => gameCards.resetGuesses()).toThrow(TypeError);
    expect(() => gameCards.resetGuesses(0)).toThrow(TypeError);
   // expect(() => gameCards.resetGuesses(null, [])).toThrow(TypeError);
    expect(() => gameCards.resetGuesses(0, 0)).toThrow(TypeError);
  }); 
});
///////////
describe('game.rotateCard', () => {
  it('should be a function', () => {
    expect(typeof gameCards.startTimer).toBe('function');
  });
  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => gameCards.startTimer()).toThrow(TypeError);
    expect(() => gameCards.startTimer(0)).toThrow(TypeError);
  //  expect(() => gameCards.startTimer(null, [])).toThrow(TypeError);
    expect(() => gameCards.startTimer(0, 0)).toThrow(TypeError);
  });  
});
/////

});