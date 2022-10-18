// product -> original products' feature array
// compare -> compare products' feature array
// both shape is [{feature: 'aaaa', value: 'bbbb}]
// output: [{feature: 'a', originalValue: 'b', compareValue: 'c'}, ...]

const productCompare = (products, compares) => {
  const results = {};

  if (products === undefined || compares === undefined) {
    return results;
  }

  for (let i = 0; i < products.length; i += 1) {
    const obj = {
      feature: products[i].feature,
      originalValue: products[i].value,
    };

    for (let j = 0; j < compares.length; j += 1) {
      if (compares[j].feature === obj.feature) {
        obj.compareValue = compares[j].value;
      }
    }

    obj.compareValue = obj.compareValue || '';
    results[obj.feature] = obj;
  }

  compares.map((compare) => {
    results[compare.feature] = results[compare.feature]
    || {
      feature: compare.feature,
      originalValue: '',
      compareValue: compare.value,
    };
  });

  return Object.values(results);
};

export default productCompare;
