import React, { Fragment, useContext, useEffect } from "react";

import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import GrattitudeContext from "../../context/grattitude/grattitudeContext";

import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
  });

  const authContext = useContext(AuthContext);
  const grattitudeContext = useContext(GrattitudeContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;
  const { clearGrattitude } = grattitudeContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    clearGrattitude();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/Grattitude'>Grattitude</Link>
      </li>

      <li>
        <Link to='/Affirmations'>Affirmations</Link>
      </li>

      <li>
        <a onClick={onLogout} href='#!'>
          <i className='material-icons'>exit_to_app</i>{" "}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div>
      <nav>
        <div className='nav-wrapper '>
          <a href='#!' className='brand-logo center'>
            {title}
            <i className='material-icons right'>{icon}</i>
          </a>

          <a href='#!' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Mood Lift",
  icon: "mood"
};

export default Navbar;
