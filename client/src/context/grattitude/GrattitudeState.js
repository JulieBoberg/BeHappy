import React, { useReducer } from "react";
import uuid from "uuid";
import GrattitudeContext from "./grattitudeContext";
import grattitudeReducer from "./grattitudeReducer";
import { ADD_GRAT, DELETE_GRAT, SET_CURRENT, CLEAR_CURRENT } from "../types";

const GrattitudeState = props => {
  const initialState = {
    grattitudes: [
      {
        id: 1,
        item: "I am grateful for my husband",
        category: "Family"
      },
      {
        id: 2,
        item: "I am grateful for my dogs",
        category: "Family"
      },
      {
        id: 3,
        item: "I am grateful for extra writing time",
        category: "Leisure"
      },
      {
        id: 4,
        item: "I am grateful for my sucessful job hunt",
        category: "Work"
      },
      {
        id: 5,
        item: "I am grateful for the beautiful sunshine in California",
        category: "Other"
      }
    ]
  };
  const [state, dispatch] = useReducer(grattitudeReducer, initialState);

  // Add Grattitude

  const addGrattitude = grattitude => {
    grattitude.id = uuid.v4();
    dispatch({
      type: ADD_GRAT,
      payload: grattitude
    });
  };

  // Set current
  // Clear current
  // Delete current
  return (
    <GrattitudeContext.Provider
      value={{
        grattitudes: state.grattitudes,
        addGrattitude
      }}
    >
      {props.children}
    </GrattitudeContext.Provider>
  );
};

export default GrattitudeState;
