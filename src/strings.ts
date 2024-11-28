export const generateRandomString = (length: number): string => [...Array(length)].map(() => Math.random().toString(36)[2]).join('');

export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};