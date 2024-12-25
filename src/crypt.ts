import * as crypto from 'crypto';
import {
  IHashedPassword,
  THashAlgorithm,
} from './types/index';
// algorithm: THashAlgorithm = 'sha512',saltSize: number = 16, iterations: number = 100000, keyLen: number = 64): boolean => {

interface IHashOptions {
  iterations?: number, 
  keyLen?: number, 
  algorithm?: THashAlgorithm,
}

const defValues = {
  algorithm: 'sha256',
  iterations: 3000,
  keyLen: 64,
  saltSize: 16,
};

const getHash = (password: string, salt: string, options:IHashOptions = {} ): string => {
  const { iterations = defValues.iterations, keyLen = defValues.keyLen, algorithm = defValues.algorithm } = options;
  return crypto.pbkdf2Sync(password, salt, iterations, keyLen, algorithm).toString('hex');
}

const getSaltAndHash = (password: string, saltSize: number = defValues.saltSize, options:IHashOptions = {}): IHashedPassword => {
  const salt = crypto.randomBytes(saltSize).toString('hex');
  return { salt, hash: getHash(password, salt, options) };
}

const isHashBelongPassword = (password: string, salt: string, testHash: string, options: IHashOptions = {}): boolean => {
  return testHash === getHash(password, salt, options);
}

export {
  getSaltAndHash,
  isHashBelongPassword,
}