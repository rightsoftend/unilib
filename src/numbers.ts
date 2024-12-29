const average = (...args: number[]): number => args.reduce((a, b) => a + b, 0) / args.length;

const randomNumber = (min: number, max:number): number => {
  if ( min > max ) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min)) + min;
}

export {
  average,
  randomNumber,
};