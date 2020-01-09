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

  const onSubmit = e => {
    e.preventDefault();
    grattitudeContext.addGrattitude(grattitude);
    setGrattitude({ item, category });
  };

  return (
    <Fragment>
      <div class='row' onSubmit={onSubmit}>
        <form class='col s12'>
          <div class='row'>
            <div class='input-field col s12'>
              <i class='material-icons prefix'>favorite_border</i>
              <textarea
                id='icon_prefix2'
                class='materialize-textarea'
                data-length='120'
              ></textarea>
              <label for='icon_prefix2'>I am grateful for...</label>
            </div>
            <div class='input-field col s12 m8 l4'>
              <i class='material-icons prefix'>label</i>
              <select>
                <option value='' disabled selected>
                  Choose a Category
                </option>
                <option value='1'>Family</option>
                <option value='2'>Friends</option>
                <option value='3'>Work</option>
                <option value='4'>Leisure</option>
                <option value='5'>Other</option>
              </select>
              <label>Category</label>
            </div>
          </div>
          {/*  ADD IN OTHER LINES
          <div class='row'>
            <div class='input-field col s12'>
              <i class='material-icons prefix'>favorite_border</i>
              <textarea
                id='icon_prefix2'
                class='materialize-textarea'
                data-length='120'
              ></textarea>
              <label for='icon_prefix2'>Today I really love...</label>
            </div>
          </div>

          <div class='row'>
            <div class='input-field col s12'>
              <i class='material-icons prefix'>favorite_border</i>
              <textarea
                id='icon_prefix2'
                class='materialize-textarea'
                data-length='120'
              ></textarea>
              <label for='icon_prefix2'>I'm so grateful that...</label>
            </div>
          </div> */}
        </form>
      </div>
      <a class='btn-floating btn-large waves-effect waves-light red'>
        <i class='material-icons'>add</i>
      </a>
    </Fragment>
  );
};

export default GrattitudeForm;
