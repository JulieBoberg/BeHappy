import { ADD_GRAT, DELETE_GRAT, SET_CURRENT, CLEAR_CURRENT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_GRAT:
      return {
        ...state,
        grattitudes: [...state.grattitudes, action.payload]
      };

    case DELETE_GRAT:
      return {
        ...state,
        grattitudes: state.grattitudes.filter(
          grattitude => grattitude.id !== action.payload
        )
      };
    default:
      return state;
  }
};
