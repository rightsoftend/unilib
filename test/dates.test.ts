import {
  dayDiff,
  dayInYear,
} from "../src/dates"

describe('dates module', () => {
  test('difference in days between 11-17-2024 and 11-17-2025 to equal 366 days', () => {
    expect(dayDiff(new Date(1995, 11, 17), new Date(1996, 11, 17))).toBe(366);
  });

  test('difference in days between 11-01-2024 and 12-01-2024 to equal 31 days', () => {
    expect(dayDiff(new Date(2024, 11, 1), new Date(2024, 12, 1))).toBe(31);
  });

});