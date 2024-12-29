import {
  getRandomIndex,
  isStringArray,
  isNumberArray,
  numberToArray,
  arrayOfNumbersToNumber,
} from "../src/arrays"


describe('arrays module', () => {
  test('is all elements in array are strings', () => {
    const arrAllAreStrings = ['twer','  sd2w','sdasd',' wqe12&%^','wer wet231 :'];
    const arrNotAllAreStrings = ['gjderydgsah4fgh$56f','asdh32 &^', 5,' dshf33','vHfdFGh4fgs&^','cvh&^']
    expect(isStringArray(arrAllAreStrings)).toBe(true);
    expect(isStringArray(arrNotAllAreStrings)).toBe(false);
  });

  test('is all elements in array are numbers', () => {
    const arrAllAreNumbers = [4,23,43,22,521,123, 322 ,235];
    const arrNotAllAreNumbers = ['gjderydgsah4fgh$56f','asdh32 &^', 5,' dshf33','vHfdFGh4fgs&^','cvh&^']
    expect(isNumberArray(arrAllAreNumbers)).toBe(true);
    expect(isNumberArray(arrNotAllAreNumbers)).toBe(false);
  });

  test('get random index of array', () => {
    const arrs: {arr: string[] | number[], testRes: boolean}[] = [
      {arr: ['hello', 'world', 'test', 'application', 'system'], testRes: false,},
      {arr: [3, 56, 23, 6, 43, 246, 3, 5, 6, 5, 3], testRes: true,},
    ];
    for (const testObj of arrs) {
      if (isStringArray(testObj.arr)) {
        const ind = getRandomIndex(testObj.arr);
        expect(ind > 0 && ind < testObj.arr.length).toBe(true);
      }
      if (isNumberArray(testObj.arr)) {
        const ind = getRandomIndex(testObj.arr);
        expect(ind > 0 && ind < testObj.arr.length).toBe(true);
      }
    }
  });

  test('convert number to array and back it to number', () => {
    const arrNumbers = [2837, 129083, 378123.678, 12987, 3127836.000, 1238979];
    for (const num of arrNumbers) {
      expect(arrayOfNumbersToNumber(numberToArray(num))).toBe(Math.floor(num));
    }
  });

});
