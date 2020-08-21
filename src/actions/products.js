import types from './types';

const productSelected = (product) => {
  return {
    type: types.PRODUCT_SELECTED,
    product: product,
  };
};

const productDeSelected = (product) => {
  return {
    type: types.PRODUCT_DESELECTED,
    product: product,
  };
};

export default { productDeSelected, productSelected };