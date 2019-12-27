import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Navbar from "../src/components/layout/Navbar";
import "./App.css";

const App = () => {
  // init materalize js
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Fragment>
      <Navbar />
      Brain Training for Happiness
    </Fragment>
  );
};

export default App;
