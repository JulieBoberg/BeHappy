import React, { Fragment } from "react";

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
        <h5 className='row'>{item}</h5>

        <div className='chip'>{category}</div>
        {/* <Moment format='MMMM Do YYYY, h:mm:ss a'>{grat.date}</Moment> */}
      </li>
    </Fragment>
  );
};

GrattitudeItem.propTypes = {
  grattitude: PropTypes.object.isRequired
};

export default GrattitudeItem;
