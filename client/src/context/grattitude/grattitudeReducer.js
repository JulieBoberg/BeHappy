import { ADD_GRAT, DELETE_GRAT, SET_CURRENT, CLEAR_CURRENT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_GRAT:
      return {
        ...state,
        grattitude: [...state]
      };
    default:
      return state;
  }
};
