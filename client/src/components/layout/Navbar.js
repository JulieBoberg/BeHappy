import React from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

const Navbar = () => {
  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
  });
  return (
    <div>
      <nav>
        <div className='nav-wrapper '>
          <a href='#!' className='brand-logo center'>
            <i className='material-icons '>mood</i>
          </a>
          <a href='#!' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <a href='sass.html'>Grattitude</a>
            </li>
            <li>
              <a href='badges.html'>Affirmations</a>
            </li>

            <li>
              <a href='mobile.html'>Mood</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <a href='sass.html'>Grattitude</a>
        </li>
        <li>
          <a href='badges.html'>Affirmations</a>
        </li>

        <li>
          <a href='mobile.html'>Mood</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
