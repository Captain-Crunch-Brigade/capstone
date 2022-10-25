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

  it('should return null if input is less or larger than 5', () => {
    const num = 7.00;
    const result = getStarsByQuarter(num);
    expect(result).toBe(null);
  });

  it('should change the ratings to 3 if input is 2.99', () => {
    const num = 2.99;
    const result = getStarsByQuarter(num);
    expect(result).toBe(3);
  });

  it('should return 0 if input is less than 0.125', () => {
    const num = 0.08;
    const result = getStarsByQuarter(num);
    expect(result).toBe(0);
  });
});
