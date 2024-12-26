interface IHashedPassword {
  salt: string;
  hash: string;
}

type THashAlgorithm = 'sha1' | 'sha224' | 'sha256' | 'sha384' | 'sha512' | 'sha3-224' | 'sha3-256' | 'sha3-384' | 'sha3-512' | 'shake128' | 'shake256' | 'rmd160';

interface IHashOptions {
  algorithm?: THashAlgorithm,
  iterations?: number, 
  keyLen?: number, 
  saltSize?: number,
}

export {
  IHashedPassword,
  THashAlgorithm,
  IHashOptions,
}