import React, { Fragment, useContext, useState } from "react";
import GrattitudeContext from "../../context/grattitude/grattitudeContext";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const GrattitudeForm = () => {
  const grattitudeContext = useContext(GrattitudeContext);

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
  //SOmething is wrong on the onSubmit End.

  const onSubmit = e => {
    e.preventDefault();
    //Starting on addGrattitude
    grattitudeContext.addGrattitude(grattitude);
    setGrattitude({
      item: "",
      category: "Choose a category"
    });
  };

  return (
    <Fragment>
      <div class='row container' style={{ overflow: "visible" }}>
        <form class='col s12' onSubmit={onSubmit}>
          <div class='row'>
            <div class='input-field col s12'>
              <i class='material-icons prefix'>favorite_border</i>
              <input
                type='text'
                name='item'
                value={item}
                onChange={onChange}
                id='icon_prefix2'
                class='materialize-textarea'
                data-length='120'
              ></input>
              <label for='icon_prefix2'>I am grateful for...</label>
            </div>

            <div class='input-field col s12 m8 l4'>
              <i class='material-icons prefix'>label</i>
              <select
                type='text'
                name='category'
                value={category}
                onChange={onChange}
              >
                <option value='' disabled selected>
                  Choose a Category
                </option>
                <option value='Family'>Family</option>
                <option value='Friends'>Friends</option>
                <option value='Work'>Work</option>
                <option value='Leisure'>Leisure</option>
                <option value='Other'>Other</option>
              </select>
              <label>Category</label>
            </div>
          </div>
          <div class='row'>
            <button
              class='btn-floating btn-large waves-effect waves-light red'
              type='submit'
              value='Add Grattitude'
            >
              <i class='material-icons right'>add</i>
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default GrattitudeForm;
