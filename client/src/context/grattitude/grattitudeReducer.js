import {
  ADD_GRAT,
  DELETE_GRAT,
  GET_GRATTITUDE,
  CLEAR_GRATTITUDE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_GRATTITUDE,
  GRAT_ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_GRAT:
      return {
        ...state,
        grattitudes: [action.payload, ...state.grattitudes]
      };

    case DELETE_GRAT:
      return {
        ...state,
        grattitudes: state.grattitudes.filter(
          grattitude => grattitude._id !== action.payload
        )
      };
    case GET_GRATTITUDE:
      return {
        ...state,
        grattitudes: action.payload
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
          grattitude._id === action.payload._id ? action.payload : grattitude
        )
      };
    case GRAT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_GRATTITUDE:
      return {
        ...state,
        grattitudes: [],
        error: null,
        current: null
      };
    default:
      return state;
  }
};
