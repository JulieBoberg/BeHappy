import React, { Fragment, useContext } from "react";
import AffirmationContext from "../../context/affirmations/affirmationsContext";
import PropTypes from "prop-types";

const AffirmationList = ({ affirmation }) => {
  const affirmationContext = useContext(AffirmationContext);

  const { _id, affirm } = affirmation;

  return (
    <Fragment>
      <li className='collection-item'>
        <div className='row'>
          <p style={{ fontSize: "24px" }}>{affirm}</p>
        </div>
      </li>
    </Fragment>
  );
};

AffirmationContext.propTypes = {
  affirmation: PropTypes.object.isRequired
};

export default AffirmationList;
