const initialState = {
  quantity: 1,
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_QUANTITY":
      return { ...state, quantity: state.quantity + 1 };
    case "DECREMENT_QUANTITY":
      return { ...state, quantity: Math.max(1, state.quantity - 1) };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
