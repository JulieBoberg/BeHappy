import {
  ADD_GRAT,
  DELETE_GRAT,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_ALERT,
  UPDATE_GRATTITUDE
} from "../types";

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

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };

    case UPDATE_GRATTITUDE:
      return {
        ...state,
        grattitudes: state.grattitudes.map(grattitude =>
          grattitude.id === action.payload.id ? action.payload : grattitude
        )
      };
    default:
      return state;
  }
};
