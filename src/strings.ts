export const generateRandomString = (length: number): string => [...Array(length)].map(() => Math.random().toString(36)[2]).join('')