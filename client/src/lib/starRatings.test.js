import { getAverageStars, getStarsByQuarter } from './starRatings';

describe('starRating helper function tests', () => {
  it('should calculate correct average stars', () => {
    const starObj = {
      1: '1',
      2: '1',
      3: '1',
      4: '1',
      5: '2',
    };
    const result = getAverageStars(starObj);
    expect(result).toBe('3.33');
  });

  it('should change the ratings closest to quarter values', () => {
    const num = 3.33;
    const result = getStarsByQuarter(num);
    expect(result).toBe(3.25);
  });
});
