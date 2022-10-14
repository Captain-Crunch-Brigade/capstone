import React from 'react';
import RelatedItemsAndComparison from './RelatedItemsAndComparison';
import ProductOverview from './ProductOverview'

const ProductDetails = function ProductDetails() {
  return (
    <div>
      <ProductOverview />
      <RelatedItemsAndComparison />
    </div>
  );
};

export default ProductDetails;
