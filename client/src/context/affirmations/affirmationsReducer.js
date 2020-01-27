// import {
// //   ADD_AFFIRMATION,
// //   DELETE_AFFIRMATION,
// //   GET_AFFIRMATION,
// //   SET_CURRENT,
// //   CLEAR_CURRENT,
// //   UPDATE_AFFIRMATION,
// //   AFFIRMATION_ERROR,
// //   CLEAR_AFFIRMATION
// } from "../types";

// export default (state, action) => {
//   switch (action.type) {
//     case ADD_AFFIRMATION:
//       return {
//         ...state,
//         gratitudes: [action.payload, ...state.gratitudes]
//       };

//     case DELETE_AFFIRMATION:
//       return {
//         ...state,
//         gratitudes: state.gratitudes.filter(
//           gratitude => gratitude._id !== action.payload
//         )
//       };
//     case GET_AFFIRMATION:
//       return {
//         ...state,
//         gratitudes: action.payload
//       };
//     case SET_CURRENT:
//       return {
//         ...state,
//         current: action.payload
//       };

//     case CLEAR_CURRENT:
//       return {
//         ...state,
//         current: null
//       };

//     case UPDATE_AFFIRMATION:
//       return {
//         ...state,
//         gratitudes: state.gratitudes.map(gratitude =>
//           gratitude._id === action.payload._id ? action.payload : gratitude
//         )
//       };
//     case AFFIRMATION_ERROR:
//       return {
//         ...state,
//         error: action.payload
//       };
//     case CLEAR_AFFIRMATION:
//       return {
//         ...state,
//         gratitudes: [],
//         error: null,
//         current: null
//       };
//     default:
//       return state;
//   }
// };
