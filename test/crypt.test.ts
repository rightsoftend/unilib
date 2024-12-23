import {
  hashPassword_sha512,
} from "../src/crypt"

describe('crypt module', () => {
  test('check if salt and hash are generated', () => {
    const testHash = hashPassword_sha512('vcx,msdkjfhsk');
    expect(testHash.hash.length).toBe(128);
    expect(testHash.salt.length).toBe(32);
  });

});