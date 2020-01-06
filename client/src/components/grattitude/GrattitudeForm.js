import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import React, { Fragment } from "react";

const GrattitudeForm = () => {
  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(
      "input#input_text, textarea#icon_prefix2"
    );
    var instances = M.CharacterCounter.init(elems);
  });

  return (
    <Fragment>
      <div class='row'>
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
          </div>

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
          </div>
        </form>
      </div>

      <a class='btn-floating btn-large waves-effect waves-light red'>
        <i class='material-icons'>add</i>
      </a>
    </Fragment>
  );
};

export default GrattitudeForm;
