import {
  ADD_AFFIRMATION,
  DELETE_AFFIRMATION,
  GET_AFFIRMATION,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_AFFIRMATION,
  AF_ERROR,
  CLEAR_AFFIRMATION
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_AFFIRMATION:
      return {
        ...state,
        affirmations: action.payload
      };
    case ADD_AFFIRMATION:
      return {
        ...state,
        affirmations: [action.payload, ...state.affirmations]
      };
      case AF_ERROR:
      return {
        ...state,
        error: action.payload
      };

    // case DELETE_AFFIRMATION:
    //   return {
    //     ...state,
    //     gratitudes: state.gratitudes.filter(
    //       gratitude => gratitude._id !== action.payload
    //     )
    //   };
    // case GET_AFFIRMATION:
    //   return {
    //     ...state,
    //     gratitudes: action.payload
    //   };
    // case SET_CURRENT:
    //   return {
    //     ...state,
    //     current: action.payload
    //   };

    // case CLEAR_CURRENT:
    //   return {
    //     ...state,
    //     current: null
    //   };

    // case UPDATE_AFFIRMATION:
    //   return {
    //     ...state,
    //     gratitudes: state.gratitudes.map(gratitude =>
    //       gratitude._id === action.payload._id ? action.payload : gratitude
    //     )
    //   };
    
    // case CLEAR_AFFIRMATION:
    //   return {
    //     ...state,
    //     gratitudes: [],
    //     error: null,
    //     current: null
    //   };
    default:
      return state;
  }
};
