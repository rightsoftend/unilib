import {
  generateRandomString,
  isString,
  isEmptyString,
} from "../src/strings"

describe('strings module', () => {
  test('random string length to equal 24', () => {
    expect(generateRandomString(24).length).toBe(24);
  });
});

describe('isString - check if the value is a string', () => {
  test('pass string expect true', () => {
    expect(isString('lorem')).toBe(true);
  });

  test('pass number expect false', () => {
    expect(isString(637)).toBe(false);
  });

  test('pass object expect false', () => {
    expect(isString({})).toBe(false);
  });
});


describe('isEmptyString - check if the value of string is empty', () => {
  test('pass string expect false', () => {
    expect(isEmptyString('sdfTUjhg76FG-gs$%d')).toBe(false);
  });

  test('pass string expect true', () => {
    expect(isEmptyString('')).toBe(true);
  });

  test('pass number expect the error', () => {
    expect(() => isEmptyString(637)).toThrow('The value isn\'t a string!');
  });

  test('pass object expect the error', () => {
    expect(() => isEmptyString({})).toThrow('The value isn\'t a string!');
  });
});

