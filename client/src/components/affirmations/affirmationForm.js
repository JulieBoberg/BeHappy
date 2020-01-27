import React from "react";
import "materialize-css/dist/css/materialize.min.css";

export const affirmationForm = () => {
  // The simple form that the affirmations can be entered into
  return (
    <div className='row container' style={{ overflow: "visible" }}>
      <form
        className='col s12'
        //   onSubmit={onSubmit}
      >
        <div className='row'>
          {/* Affirmation input*/}
          <div className='input-field col s12'>
            <i className='material-icons prefix'>favorite_border</i>
            <input
              type='text'
              name='affirm'
              //   value={affirm}
              // onChange={onChange}
              id='icon_prefix2'
              className='materialize-textarea'
              data-length='120'
            ></input>
            <label htmlFor='icon_prefix2'>Wonderful words...</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default affirmationForm;
