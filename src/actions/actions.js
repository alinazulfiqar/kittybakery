import * as actionTypes from "./action-types";

export const addToCart = (itemID, initQty) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
      qty: initQty,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustQTY = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const updateSearch = (value) => {
  return {
    type: actionTypes.UPDATE_SEARCH,
    payload: {
      val: value,
    },
  };
};
