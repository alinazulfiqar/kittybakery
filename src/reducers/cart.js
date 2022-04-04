import * as actionTypes from "../actions/action-types";
import data from "../utils/data.json";

const initialState = {
  products: [...data],
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((prod) => prod.id == action.payload.id);
      const inCart = state.cart.find((cookie) => cookie.id == action.payload.id)
        ? true
        : false;

      //   const inCart = state.cart.find((item) =>
      //     item.id === action.payload.id ? true : false
      //   );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id == action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [
              ...state.cart,
              { ...item, qty: +action.payload.qty ? +action.payload.qty : 1 },
            ],

        // inCart
        //   ? state.cart.map((item) =>
        //       item.id === action.payload.id
        //         ? { ...item, qty: item.qty + 1 }
        //         : { ...item }
        //     )
        //   : [...state.cart, { ...item, qty: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
