import {
  generateRandomString,
  isString,
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


