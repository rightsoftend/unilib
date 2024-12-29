const isStringArray = (arr: unknown[]): arr is string[] => arr.every(item => typeof item === 'string');

const isNumberArray = (arr: unknown[]): arr is number[] => arr.every(item => typeof item === 'number');

const getRandomIndex = <T>(arr: T[]): number => Math.floor(Math.random() * arr.length);

export {
  isStringArray,
  isNumberArray,
  getRandomIndex,
}