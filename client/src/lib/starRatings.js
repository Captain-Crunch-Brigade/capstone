// shape of obj -> {{1: x}, {2: y}, {3: z}, {4, a}, {5, b}}
export const getAverageStars = (obj) => {
  const totalSum = (1 * parseInt(obj['1'], 10) + 2 * parseInt(obj['2'], 10) + 3 * parseInt(obj['3'], 10) + 4 * parseInt(obj['4'], 10) + 5 * parseInt(obj['5'], 10));
  const totalNum = parseInt(obj['1'], 10) + parseInt(obj['2'], 10) + parseInt(obj['3'], 10) + parseInt(obj['4'], 10) + parseInt(obj['5'], 10);

  return (totalSum / totalNum).toFixed(2);
};

// Input: num -> average star ratings (0 <= num <= 5)
// Output: average star ratings by Quarter (3.75 if input is 3.8, 4 if input is 3.86)
export const getStarsByQuarter = (num) => {
  if (num >= 0 && num <= 0.125) {
    return 0;
  }
  if (num > 0.125 && num <= 0.375) {
    return 0.25;
  }
  if (num > 0.375 && num <= 0.625) {
    return 0.5;
  }
  if (num > 0.625 && num <= 0.875) {
    return 0.75;
  }
  if (num > 0.875 && num <= 1.125) {
    return 1;
  }
  if (num > 1.125 && num <= 1.375) {
    return 1.25;
  }
  if (num > 1.375 && num <= 1.625) {
    return 1.5;
  }
  if (num > 1.625 && num <= 1.875) {
    return 1.75;
  }
  if (num > 1.875 && num <= 2.125) {
    return 2;
  }
  if (num > 2.125 && num <= 2.375) {
    return 2.25;
  }
  if (num > 2.375 && num <= 2.625) {
    return 2.5;
  }
  if (num > 2.625 && num <= 2.875) {
    return 2.75;
  }
  if (num > 2.875 && num <= 3.125) {
    return 3;
  }
  if (num > 3.125 && num <= 3.375) {
    return 3.25;
  }
  if (num > 3.375 && num <= 3.625) {
    return 3.5;
  }
  if (num > 3.625 && num <= 3.875) {
    return 3.75;
  }
  if (num > 3.875 && num <= 4.125) {
    return 4;
  }
  if (num > 4.125 && num <= 4.375) {
    return 4.25;
  }
  if (num > 4.375 && num <= 4.625) {
    return 4.5;
  }
  if (num > 4.625 && num <= 4.875) {
    return 4.75;
  }
  if (num > 4.875 && num <= 5) {
    return 5;
  }
  return null;
};
