import React, { useReducer } from "react";
import uuid from "uuid";
import GrattitudeContext from "./grattitudeContext";
import grattitudeReducer from "./grattitudeReducer";
import {
  ADD_GRAT,
  DELETE_GRAT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_GRATTITUDE
} from "../types";

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
    ],
    current: null
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

  // Delete Grattitude
  const deleteGrattitude = id => {
    dispatch({
      type: DELETE_GRAT,
      payload: id
    });
  };

  // Set Current
  const setCurrent = grattitude => {
    dispatch({
      type: SET_CURRENT,
      payload: grattitude
    });
  };

  // Clear Current
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  };

  // Update Grattitude
  const updateGrattitude = grattitude => {
    dispatch({
      type: UPDATE_GRATTITUDE,
      payload: grattitude
    });
  };

  return (
    <GrattitudeContext.Provider
      value={{
        grattitudes: state.grattitudes,
        current: state.current,
        setCurrent,
        clearCurrent,
        addGrattitude,
        deleteGrattitude,
        updateGrattitude
      }}
    >
      {props.children}
    </GrattitudeContext.Provider>
  );
};

export default GrattitudeState;
