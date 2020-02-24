import React, { Fragment, useContext } from "react";
import AffirmationContext from "../../context/affirmations/affirmationsContext";

const AffirmationList = ({ affirmation }) => {
  const affirmationContext = useContext(AffirmationContext);
  const { id, affirm } = affirmation;

  return (
    <Fragment>
      <li className='collection-item'>
        <div className='row'>
          <p style={{ fontSize: "24px" }}>{affirm}</p>
        </div>

        {/* <span>
          <a
            className='waves-effect waves-yellow lighten-3 btn-flat'
            onClick={() => setCurrent(gratitude)}
          >
            <i className='material-icons'>create</i>
          </a>
        </span> */}
        {/* <span>
          <a className='waves-effect waves-red btn-flat' onClick={onDelete}>
            <i className='material-icons'>delete_outline</i>
          </a>
        </span> */}

        {/* <Moment format='MMMM Do YYYY, h:mm:ss a'>{grat.date}</Moment> */}
      </li>
    </Fragment>
  );
};

export default AffirmationList;
