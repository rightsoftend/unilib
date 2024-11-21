import {
  average,
} from "../src/numbers"

describe('numbers module', () => {
  test('calculation average to equal 4', () => {
    const arr = [3,4,5,3,4,5];
    expect(average(...arr)).toBe(4);
  });

});