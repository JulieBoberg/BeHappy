import React from "react";

const affirmationItem = () => {
  return (
    //This would be better as an optional window for editing. The actual piece would be a carousel
    <div className='container'>
      <li className='collection-item'>
        <div className='row'>
          <p style={{ fontSize: "24px" }}>AFFIRMATIONS</p>
        </div>
        <span>
          <a
            className='waves-effect waves-yellow lighten-3 btn-flat'
            // onClick={() => setCurrent(gratitude)}
          >
            <i className='material-icons'>create</i>
          </a>
        </span>
        <span>
          <a
            className='waves-effect waves-red btn-flat'
            //    onClick={onDelete}
          >
            <i className='material-icons'>delete_outline</i>
          </a>
        </span>
      </li>
    </div>
  );
};

export default affirmationItem;
