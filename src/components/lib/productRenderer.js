import React from 'react';
import ProductTile from '../ProductTile';

const productRenderer = (products, props) => {
  const sorted = Object.keys(products)
  sorted.sort((a, b) => {
    return products[a].price - products[b].price
  })

  return sorted.map((key, idx) => {
    return <ProductTile
      key={idx}
      product={products[key]}
      allProducts={props.products}
      onProductSelect={props.onProductSelect}
      onProductDeselect={props.onProductDeselect}
    />
  })
}

export default productRenderer;
