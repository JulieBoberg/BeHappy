import React, { useContext } from "react";
// import Moment from 'react-moment';
import GrattitudeContext from "../../context/grattitude/grattitudeContext";
import GrattitudeItem from "./GrattitudeItem";

const GrattitudeContainer = () => {
  const grattitudeContext = useContext(GrattitudeContext);

  const { grattitudes } = grattitudeContext;

  return (
    <div className='container' style={{ overflow: "visible" }}>
      {/* This is the list of grattitude items that will cycle through with maps in grattitude form */}
      <ul class='collection'>
        {grattitudes.map(grattitude => (
          <GrattitudeItem key={grattitude.id} grattitude={grattitude} />
        ))}
      </ul>
    </div>
  );
};

export default GrattitudeContainer;
