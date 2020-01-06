import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Navbar from "../src/components/layout/Navbar";
import "./App.css";
import GrattitudeForm from "./components/grattitude/GrattitudeForm";

const App = () => {
  // init materalize js
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Fragment>
      <Navbar />
      <GrattitudeForm />
    </Fragment>
  );
};

export default App;
