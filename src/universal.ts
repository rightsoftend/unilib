export const uniqueArray = <T extends Date | unknown>(arr: T[]): T[] => {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  const isDateArray = (array: (Date | unknown)[]): array is Date[] =>
    array[0] instanceof Date;
  if (isDateArray(arr)) {
    const arrMsecFull: number[] = arr.map((date: Date) => date.valueOf());
    const arrMsec: number[] = arrMsecFull.filter((msec: number) => !(Number.isNaN(msec)));
    const uniqArr = Array.from(new Set<number>(arrMsec));
    return uniqArr.map((msec) => new Date(msec)) as T[];
  }
  return Array.from(new Set<T>(arr));
};