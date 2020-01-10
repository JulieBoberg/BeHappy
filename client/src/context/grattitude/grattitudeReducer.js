import { ADD_GRAT, DELETE_GRAT, SET_CURRENT, CLEAR_CURRENT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_GRAT:
      return {
        ...state,
        grattitudes: [...state.grattitudes, action.payload]
      };
    default:
      return state;
  }
};
