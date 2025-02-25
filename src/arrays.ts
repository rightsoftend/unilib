const isStringArray = (arr: unknown[]): arr is string[] => arr.every(item => typeof item === 'string');

const isNumberArray = (arr: unknown[]): arr is number[] => arr.every(item => typeof item === 'number');

const getRandomIndex = <T>(arr: T[]): number => {
  if (!(Array.isArray(arr) && arr.length > 0)) return -1;
  return Math.floor(Math.random() * arr.length);
}

const numberToArray = (num: number): number[] => [...`${Math.floor(num)}`].map(n => Number.parseInt(n));

const arrayOfNumbersToNumber = (arr: number[]): number => Number(arr.join(''));

const minNumberArray = (arr: number[]): number => arr.reduce((a, b) => a < b ? a : b);

const maxNumberArray = (arr: number[]): number => arr.reduce((a, b) => a < b ? b : a);

export {
  isStringArray,
  isNumberArray,
  getRandomIndex,
  numberToArray,
  arrayOfNumbersToNumber,
  minNumberArray,
  maxNumberArray,
}