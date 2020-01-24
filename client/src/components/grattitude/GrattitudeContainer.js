import React, { useContext, useEffect } from "react";
// import Moment from 'react-moment';
import GrattitudeContext from "../../context/grattitude/grattitudeContext";

import GrattitudeItem from "./GrattitudeItem";

const GrattitudeContainer = () => {
  const grattitudeContext = useContext(GrattitudeContext);

  const { grattitudes, getGrattitude } = grattitudeContext;

  useEffect(() => {
    getGrattitude();

    // eslint-disable-next-line
  }, []);

  return (
    <div className='container' style={{ overflow: "visible" }}>
      {/* This is the list of grattitude items that will cycle through with maps in grattitude form */}
      <ul className='collection'>
        {grattitudes.map(grattitude => (
          <GrattitudeItem key={grattitude._id} grattitude={grattitude} />
        ))}
      </ul>
    </div>
  );
};

export default GrattitudeContainer;
