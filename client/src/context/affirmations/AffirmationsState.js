import React, { useReducer } from "react";
import axios from "axios";
import affirmationsReducer from "./affirmationsReducer";
import AffirmationsContext from "./affirmationsContext";
import {
  ADD_AFFIRMATION,
  GET_AFFIRMATION,
  AF_ERROR,
  DELETE_AFFIRMATION,
  UPDATE_AFFIRMATION,
  SET_CURRENT,
  CLEAR_CURRENT
} from "../types";

const AffirmationsState = props => {
  const initialState = {
    affirmations: [],
    current: null
  };

  const [state, dispatch] = useReducer(affirmationsReducer, initialState);

  // Get Affirmations
  const getAffirmation = async () => {
    const res = await axios.get("/api/affirmation");
    try {
      dispatch({
        type: GET_AFFIRMATION,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AF_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Affirmations
  const addAffirmation = async affirmation => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/affirmation", affirmation, config);
      dispatch({
        type: ADD_AFFIRMATION,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AF_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete Affirmations
  const deleteAffirmation = async id => {
    try {
      await axios.delete(`/api/affirmation/${id}`);
      dispatch({
        type: DELETE_AFFIRMATION,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: AF_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Edit Affirmations
  const updateAffirmation = async affirmation => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.put(
        `/api/affirmation/${affirmation._id}`,
        affirmation,
        config
      );
      dispatch({
        type: UPDATE_AFFIRMATION,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AF_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Set Current
  const setCurrent = affirmation => {
    dispatch({
      type: SET_CURRENT,
      payload: affirmation
    });
  };

  // Clear Current
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  };

  return (
    <AffirmationsContext.Provider
      value={{
        affirmations: state.affirmations,
        current: state.current,
        error: state.error,
        addAffirmation,
        deleteAffirmation,
        updateAffirmation,
        getAffirmation
      }}
    >
      {props.children}
    </AffirmationsContext.Provider>
  );
};

export default AffirmationsState;
