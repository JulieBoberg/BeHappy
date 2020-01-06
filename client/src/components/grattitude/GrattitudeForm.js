import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import React from "react";

const GrattitudeForm = () => {
  return (
    <div class='row'>
      <form class='col s12'>
        <div class='row'>
          <div class='input-field col s6'>
            <i class='material-icons prefix'>favorite_border</i>
            <textarea id='icon_prefix2' class='materialize-textarea'></textarea>
            <label for='icon_prefix2'>I am grateful for...</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GrattitudeForm;
