import types from '../actions/types';

const initialState = {
  products: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCT_SELECTED:
      return {
        ...state,
        products: [...state.products, action.product],
      };
    case types.PRODUCT_DESELECTED:
      const products = [...state.products];
      const index = products.findIndex((product) => {
        return product.name === action.product.name;
      });
      products.splice(index, 1);
      return {
        ...state,
        products,
      };
    default:
      return state;
  }
}

export default productsReducer;