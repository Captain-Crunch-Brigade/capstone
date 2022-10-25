import productCompare from './productCompare';

describe('Product Compare helper function test', () => {
  it('should return undefined when input is undefined', () => {
    const obj1 = undefined;
    const obj2 = { a: 'hi' };
    const result = productCompare(obj1, obj2);
    expect(result).toStrictEqual({});
  });

  it('should return merged result with two objects', () => {
    const products = [
      {
        feature: 'test1',
        value: '111',
      },
      {
        feature: 'test2',
        value: '222',
      },
    ];

    const compares = [
      {
        feature: 'test1',
        value: '333',
      },
    ];

    const expected = [
      {
        feature: 'test1',
        originalValue: '111',
        compareValue: '333',
      },
      {
        feature: 'test2',
        originalValue: '222',
        compareValue: '',
      },
    ];

    const result = productCompare(products, compares);
    expect(result).toStrictEqual(expected);
  });
});
