import React from 'react';
import RelatedItemsAndComparison from './RelatedItemsAndComparison';
import QnAWidget from './QnAWidget'
import ProductOverview from './ProductOverview'

const ProductDetails = function ProductDetails() {
  return (
    <div>
      <ProductOverview />
      <RelatedItemsAndComparison />
      <QnAWidget id={65631}/>
    </div>
  );
};

export default ProductDetails;
