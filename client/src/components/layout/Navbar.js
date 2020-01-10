import React from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
  });
  return (
    <div>
      <nav>
        <div className='nav-wrapper '>
          <a href='#!' className='brand-logo center'>
            {title}
            <i class='material-icons right'>{icon}</i>
          </a>
          <a href='#!' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Grattitude'>Grattitude</Link>
            </li>

            <li>
              <Link to='/Affirmations'>Affirmations</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Grattitude'>Grattitude</Link>
        </li>

        <li>
          <Link to='/Affirmations'>Affirmations</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Mood",
  icon: "mood"
};

export default Navbar;
