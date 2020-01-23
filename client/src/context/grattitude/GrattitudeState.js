import React, { useReducer } from "react";

import axios from "axios";
import GrattitudeContext from "./grattitudeContext";
import grattitudeReducer from "./grattitudeReducer";
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

const GrattitudeState = props => {
  const initialState = {
    grattitudes: [],
    current: null,
    error: null
  };
  const [state, dispatch] = useReducer(grattitudeReducer, initialState);

  // Get Grattitude

  const getGrattitude = async () => {
    const res = await axios.get("/api/grattitude");
    try {
      dispatch({
        type: GET_GRATTITUDE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: GRAT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Grattitude

  const addGrattitude = async grattitude => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/grattitude", grattitude, config);
      dispatch({
        type: ADD_GRAT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: GRAT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete Grattitude
  const deleteGrattitude = async id => {
    try {
      await axios.delete(`/api/grattitude/${id}`);
      dispatch({
        type: DELETE_GRAT,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: GRAT_ERROR,
        payload: err.response.msg
      });
    }
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
  const updateGrattitude = async grattitude => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.put(
        `/api/grattitude/${grattitude._id}`,
        grattitude,
        config
      );
      dispatch({
        type: UPDATE_GRATTITUDE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: GRAT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Grattitude

  const clearGrattitude = () => {
    dispatch({
      type: CLEAR_GRATTITUDE
    });
  };

  return (
    <GrattitudeContext.Provider
      value={{
        grattitudes: state.grattitudes,
        current: state.current,
        error: state.error,
        setCurrent,
        clearCurrent,
        addGrattitude,
        deleteGrattitude,
        updateGrattitude,
        getGrattitude,
        clearGrattitude
      }}
    >
      {props.children}
    </GrattitudeContext.Provider>
  );
};

export default GrattitudeState;
