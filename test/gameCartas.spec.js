import gameCards from '../src/js/gameCartasFunction.js';

describe('game', () => {
describe('funtionMatch is funtion?', ()=>{
  it('should be a function', ()=>{
    expect( gameCards.funtionMatch ({},1)).toBe('');
  });
});
describe('game.rotateCard', () => {
  it('should be a function', () => {
    expect(typeof gameCards.resetGuesses).toBe('function');
  });
});
describe('game.rotateCard', () => {
  it('should be a function', () => {
    expect(typeof gameCards.startTimer).toBe('function');
  });
});
});
