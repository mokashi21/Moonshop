export const incrementQuantity = () => {
  return {
    type: "INCREMENT_QUANTITY",
  };
};

export const decrementQuantity = () => {
  return {
    type: "DECREMENT_QUANTITY",
  };
};

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};
