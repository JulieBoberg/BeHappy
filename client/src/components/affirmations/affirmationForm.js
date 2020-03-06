import React, { useContext, useState } from "react";
import AffirmationContext from "../../context/affirmations/affirmationsContext";
import "materialize-css/dist/css/materialize.min.css";

const AffirmationForm = () => {
  const affirmationContext = useContext(AffirmationContext);

  const { addAffirmation, current } = affirmationContext;

  const onChange = e =>
    setAffirmation({ ...affirmation, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addAffirmation(affirmation);
    }
  };

  const [affirmation, setAffirmation] = useState({
    affirm: ""
  });

  const { affirm } = affirmation;

  return (
    <div className='row container' style={{ overflow: "visible" }}>
      <form className='col s12' onSubmit={onSubmit}>
        <div className='row'>
          {/* Affirmation input*/}
          <div className='input-field col s12'>
            <i className='material-icons prefix'>favorite_border</i>
            <input
              type='text'
              name='affirm'
              value={affirm}
              onChange={onChange}
              id='icon_prefix2'
              className='materialize-textarea'
              data-length='120'
            ></input>
            <label htmlFor='icon_prefix2'>Wonderful words...</label>
          </div>
        </div>

        <button
          className='btn-floating btn-large waves-effect waves-light red'
          type='submit'
          value='Add Affirmation'
        >
          <i className='material-icons right'>add</i>
        </button>
      </form>
    </div>
  );
};

export default AffirmationForm;
