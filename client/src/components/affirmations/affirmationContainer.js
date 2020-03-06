import React, { useContext, useEffect } from "react";
import AffirmationsContext from "../../context/affirmations/affirmationsContext";
import AffirmationList from "./AffirmationList";

const AffirmationContainer = () => {
  const affirmationsContext = useContext(AffirmationsContext);

  const { affirmations, getAffirmation } = affirmationsContext;

  useEffect(() => {
    getAffirmation();
  });

  return (
    <div className='container' style={{ overflow: "visible" }}>
      <ul className='collection'>
        {affirmations.map(affirmation => (
          <AffirmationList key={affirmation._id} affirmation={affirmation} />
        ))}
      </ul>
      {/* Experiment */}
      <div
        style={{
          width: "auto",
          height: "50vh",
          background: "pink",
          color: "white"
        }}
      >
        <p>
          {" "}
          {affirmations.map(affirmation => (
            <AffirmationList key={affirmation._id} affirmation={affirmation} />
          ))}
        </p>
      </div>

      {/* Experiment End */}
    </div>
  );
};

export default AffirmationContainer;
