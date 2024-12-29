import {
  average,
  randomNumber,
} from "../src/numbers"

const arrRanges = [
  {min: -5, max: 2}, 
  {min: 12, max:12},
  {min: -200, max:1},

  {min: 2, max: -5}, 
  {min: 20, max:2},
  {min: 200, max:-100},
];

const maxRandomNumberIterations = 2000;


describe('numbers module', () => {
  test('calculation average to equal 4', () => {
    const arr = [3,4,5,3,4,5];
    expect(average(...arr)).toBe(4);
  });

  test('get random numbers', () => {
    for (let i = 0; i < maxRandomNumberIterations; i++) {
      for (const num of arrRanges) {
        let min = num.min; let max = num.max;
        if ( min > max ) [min, max] = [max, min];
        const rand = randomNumber(min, max);
        expect(rand >= min && rand <= max).toBe(true);
      }
    }
  });

});




