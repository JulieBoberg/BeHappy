import React, { Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";

// import Moment from 'react-moment';
import PropTypes from "prop-types";
//import GrattitudeContext from "../../context/grattitude/grattitudeContext";

const GrattitudeItem = ({ grattitude }) => {
  //const grattitudeContext = useContext(GrattitudeContext);

  const { id, item, category, date } = grattitude;

  return (
    <Fragment>
      {/* This is the list of grattitude items that will cycle through with maps in grattitude form */}

      <li class='collection-item'>
        <div className='row'>
          <p style={{ fontSize: "24px" }}>{item}</p>
        </div>
        <span style={{ float: "left" }} className='chip show-on-small'>
          {category}{" "}
        </span>

        <span>
          <a class='waves-effect waves-yellow lighten-3 btn-flat'>
            <i class='material-icons'>create</i>
          </a>
        </span>
        <span>
          <a class='waves-effect waves-red btn-flat'>
            <i class='material-icons'>delete_outline</i>
          </a>
        </span>

        {/* <Moment format='MMMM Do YYYY, h:mm:ss a'>{grat.date}</Moment> */}
      </li>
    </Fragment>
  );
};

GrattitudeItem.propTypes = {
  grattitude: PropTypes.object.isRequired
};

export default GrattitudeItem;
