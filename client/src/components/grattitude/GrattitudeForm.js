import React, { Fragment, useContext, useState, useEffect } from "react";
import GrattitudeContext from "../../context/grattitude/grattitudeContext";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const GrattitudeForm = () => {
  const grattitudeContext = useContext(GrattitudeContext);

  const {
    addGrattitude,
    updateGrattitude,
    clearCurrent,
    current
  } = grattitudeContext;

  useEffect(() => {
    if (current !== null) {
      setGrattitude(current);
    } else {
      setGrattitude({
        item: "",
        category: ""
      });
    }
  }, [grattitudeContext, current]);

  const [grattitude, setGrattitude] = useState({
    item: "",
    category: ""
  });

  const { item, category } = grattitude;

  // initialize character count
  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(
      "input#input_text, textarea#icon_prefix2"
    );
    var instances = M.CharacterCounter.init(elems);
  });

  // OnChange works and changes state
  const onChange = e =>
    setGrattitude({ ...grattitude, [e.target.name]: e.target.value });

  // Onsubmit
  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addGrattitude(grattitude);
    } else {
      updateGrattitude(grattitude);
    }
    clearAll(grattitude);
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Fragment>
      <h1 style={{ fontSize: "35px", textAlign: "center" }}>
        {" "}
        {current ? "Edit" : "What Are You Grateful For?"}
      </h1>
      <div className='row container' style={{ overflow: "visible" }}>
        <form className='col s12' onSubmit={onSubmit}>
          <div className='row'>
            {/* Name input field */}
            <div className='input-field col s12'>
              <i className='material-icons prefix'>favorite_border</i>
              <input
                type='text'
                name='item'
                value={item}
                onChange={onChange}
                id='icon_prefix2'
                className='materialize-textarea'
                data-length='120'
              ></input>
              <label htmlFor='icon_prefix2'>I am grateful for...</label>
            </div>

            {/* Drop down menu */}
            <div className='input-field col s12 m8 l4'>
              <i className='material-icons prefix'>label</i>
              <select
                type='text'
                name='category'
                value={category}
                onChange={onChange}
              >
                <option value=''>Choose a Category</option>
                <option value='Family'>Family</option>
                <option value='Friends'>Friends</option>
                <option value='Work'>Work</option>
                <option value='Leisure'>Leisure</option>
                <option value='Other'>Other</option>
              </select>

              <label>Category</label>
            </div>
          </div>

          <div className='row'>
            <button
              className='btn-floating btn-large waves-effect waves-light red'
              type='submit'
              value='Add Grattitude'
            >
              <i className='material-icons right'>add</i>
            </button>
            {current && (
              <div>
                <button
                  className='btn-floating btn-medium waves-effect waves-light green'
                  onClick={clearAll}
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default GrattitudeForm;
