export const generateRandomString = (length: number): string => [...Array(length)].map(() => Math.random().toString(36)[2]).join('');

export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

export const isEmptyString = (value: unknown): value is string => {
  if (!isString(value)) throw new Error('The value isn\'t a string!');
  return value.length === 0;
};