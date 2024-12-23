import * as crypto from 'crypto';

interface HashedPassword {
  salt: string;
  hash: string;
}

export const hashPassword_sha512 = (password: string): HashedPassword => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
  return { salt, hash };
}
