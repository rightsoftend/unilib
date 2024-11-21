import {
  generateRandomString,
} from "../src/strings"

describe('strings module', () => {
  test('random string length to equal 24', () => {
    expect(generateRandomString(24).length).toBe(24);
  });

});