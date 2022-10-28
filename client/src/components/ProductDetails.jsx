import React from 'react';
import RelatedItemsAndComparison from './RelatedItemsAndComparison';
import QnAWidget from './QnAWidget';
import ProductOverview from './ProductOverview';

const ProductDetails = function ProductDetails() {
  return (
    <div>
      <ProductOverview />
      <RelatedItemsAndComparison />
      <QnAWidget />
    </div>
  );
};

export default ProductDetails;
