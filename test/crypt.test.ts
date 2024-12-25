import {
  getSaltAndHash,
  isHashBelongPassword,
} from "../src/crypt"

const password_1 = 'sdH&g7fgh^Tfgh6-6w';
const password_2 = 'vc4x,ms&dkj)fhsk';
const password_3 = '';

describe('crypt module', () => {

  test('check if salt and hash are generated', () => {
    const testHash = getSaltAndHash(password_1);
    expect(testHash.hash.length).toBe(128);
    expect(testHash.salt.length).toBe(32);
  });

  test('check if generated hash is the same in the both cases for empty password', () => {
    const testSaltAndHash = getSaltAndHash(password_3);
    expect(isHashBelongPassword(password_3, testSaltAndHash.salt, testSaltAndHash.hash)).toBe(true);
  });

  test('check if generated hash is the same in the both cases for not empty password', () => {
    const testSaltAndHash = getSaltAndHash(password_1);
    expect(isHashBelongPassword(password_1, testSaltAndHash.salt, testSaltAndHash.hash)).toBe(true);
  });

  test('check if generated hash is the same in the both cases', () => {
    const testSaltAndHash = getSaltAndHash(password_1);
    expect(isHashBelongPassword(password_2, testSaltAndHash.salt, testSaltAndHash.hash)).toBe(false);
  });
});