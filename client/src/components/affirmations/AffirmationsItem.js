import React, { Fragment, useContext } from "react";
import AffirmationsContext from "../../context/affirmations/affirmationsContext";
import "materialize-css/dist/css/materialize.min.css";
import PropTypes from "prop-types";

const AffirmationsItem = ({ affirmation }) => {
  const affirmationsContext = useContext(AffirmationsContext);
  const { deleteAffirmation, setCurrent, clearCurrent } = affirmationsContext;

  const { affirm, _id } = affirmation;

  const onDelete = () => {
    deleteAffirmation(_id);
    clearCurrent();
  };

  return (
    <Fragment>
      {/* This is the formating of each affirmation item that will cycle through with maps in affirmation list */}

      <li className='collection-item'>
        <div className='row'>
          <p style={{ fontSize: "24px" }}>{affirm}</p>
        </div>

        <span>
          <a
            className='waves-effect waves-yellow lighten-3 btn-flat'
            onClick={() => setCurrent(affirmation)}
            href='/#'
          >
            <i className='material-icons'>create</i>
          </a>
        </span>
        <span>
          <a
            className='waves-effect waves-red btn-flat'
            onClick={onDelete}
            href='/#'
          >
            <i className='material-icons'>delete_outline</i>
          </a>
        </span>

        {/* <Moment format='MMMM Do YYYY, h:mm:ss a'>{grat.date}</Moment> */}
      </li>
    </Fragment>
  );
};

AffirmationsItem.propTypes = {
  affirmation: PropTypes.object.isRequired
};

export default AffirmationsItem;
