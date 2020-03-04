import React, { useReducer } from "react";
import affirmationsReducer from "./affirmationsReducer";
import AffirmationsContext from "./affirmationsContext";

const AffirmationsState = props => {
  const initialState = {
    affirmations: [
      {
        id: 1,
        affirm: "I am smart and capable"
      },
      {
        id: 2,
        affirm: "I am a morning person"
      },
      {
        id: 3,
        affirm: "I am kind and patient"
      }
    ]
  };

  const [state, dispatch] = useReducer(affirmationsReducer, initialState);

  // Get Affirmations

  // Add Affirmations

  // Delete Affirmations

  // Edit Affirmations

  // Set Current

  // Clear Current

  return (
    <AffirmationsContext.Provider
      value={{
        affirmations: state.affirmations
      }}
    >
      {props.children}
    </AffirmationsContext.Provider>
  );
};

export default AffirmationsState;
