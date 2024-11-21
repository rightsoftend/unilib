import {
  uniqueArray,
} from "../src/universal"

describe('universal module', () => {
  test('array with uniq number elements length to eual 6', () => {
    const arr = [1, 3, 5, 4, 2, 3, 4, 1, 1 ,7];
    expect(uniqueArray(arr).length).toBe(6);
  });

  test('array with uniq string elements length to eual 4', () => {
    const arr = ['ei', 'terw', 'ndf' , 'wus' , 'ndf', 'terw' , 'ei' , 'ndf'];
    expect(uniqueArray(arr).length).toBe(4);
  });

  test('array with uniq Date elements length to eual 3', () => {
    const dates = ['11-12-2024','02-10-2007','11-12-2024','08-06-2009','30-06-1994','24-12-2001','25-03-2016','08-06-2009','30-06-1994'];
    const arr = dates.map(date => new Date(date));
    expect(uniqueArray(arr).length).toBe(3);
  });
  

});