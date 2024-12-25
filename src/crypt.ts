import * as crypto from 'crypto';
import {
  IHashedPassword,
  THashAlgorithm,
} from './types/index';
// algorithm: THashAlgorithm = 'sha512',saltSize: number = 16, iterations: number = 100000, keyLen: number = 64): boolean => {
/*
interface IHashOptions {
  iterations:, 
  keyLen:, 
  algorithm:
}
*/
const getHash = (password: string, salt: string, algorithm: THashAlgorithm = 'sha256', iterations: number = 3000, keyLen: number = 64): string => {
  return crypto.pbkdf2Sync(password, salt, iterations, keyLen, algorithm).toString('hex');
}

const createSaltAndHash = (password: string, saltSize: number = 16, algorithm: THashAlgorithm | undefined = undefined, iterations: number | undefined = undefined, keyLen: number | undefined = undefined): IHashedPassword => {
  const salt = crypto.randomBytes(saltSize).toString('hex');
  const hash = getHash(password, salt, algorithm, iterations, keyLen);
  return { salt, hash };
}

const isHashBelongPassword = (password: string, salt: string, testHash: string, algorithm: THashAlgorithm | undefined = undefined, iterations: number | undefined = undefined, keyLen: number | undefined = undefined): boolean => {
  const hash = getHash(password, salt, algorithm, iterations, keyLen);
  return hash === testHash;
}

export {
  createSaltAndHash,
  isHashBelongPassword,
}