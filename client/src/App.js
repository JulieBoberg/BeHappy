import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Navbar from "../src/components/layout/Navbar";
import Home from "../src/components/pages/Home";
import Grattitude from "../src/components/pages/Grattitude";
import Affirmations from "../src/components/pages/Affirmations";
import GrattitudeState from "../src/context/grattitude/GrattitudeState";
import "./App.css";

const App = () => {
  // init materalize js
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <GrattitudeState>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/affirmations' component={Affirmations} />
            <Route exact path='/grattitude' component={Grattitude} />
          </Switch>
        </Fragment>
      </Router>
    </GrattitudeState>
  );
};

export default App;
