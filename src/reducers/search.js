import * as actionTypes from "../actions/action-types";
import data from "../utils/data.json";

const defaultState = {
  search: "",
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload.val,
      };
    default:
      return state;
  }
};

export default searchReducer;
