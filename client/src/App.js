import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Navbar from "../src/components/layout/Navbar";
import Home from "../src/components/pages/Home";
import Register from "../src/components/auth/Register";
import Login from "../src/components/auth/Login";
import Alerts from "./components/layout/Alerts";
import Grattitude from "../src/components/pages/Grattitude";
import Affirmations from "../src/components/pages/Affirmations";
import AlertState from "../src/context/alert/AlertState";
import AuthState from "../src/context/auth/AuthState";
import GrattitudeState from "../src/context/grattitude/GrattitudeState";
import "./App.css";

const App = () => {
  // init materalize js
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <AuthState>
      <GrattitudeState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <Alerts />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/affirmations' component={Affirmations} />
                <Route exact path='/grattitude' component={Grattitude} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </Fragment>
          </Router>
        </AlertState>
      </GrattitudeState>
    </AuthState>
  );
};

export default App;
