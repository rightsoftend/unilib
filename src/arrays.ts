const isStringArray = (arr: unknown[]): arr is string[] => arr.every(item => typeof item === 'string');

const isNumberArray = (arr: unknown[]): arr is number[] => arr.every(item => typeof item === 'number');

const getRandomIndex = <T>(arr: T[]): number => Math.floor(Math.random() * arr.length);

const numberToArray = (num: number): number[] => [...`${Math.floor(num)}`].map(n => Number.parseInt(n));

const arrayOfNumbersToNumber = (arr: number[]): number => Number(arr.join(''));


export {
  isStringArray,
  isNumberArray,
  getRandomIndex,
  numberToArray,
  arrayOfNumbersToNumber,
}