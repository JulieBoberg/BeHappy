import React, { useContext } from "react";
import AffirmationsContext from "../../context/affirmations/affirmationsContext";
import AffirmationList from "./affirmationList";

const affirmationContainer = () => {
  const affirmationsContext = useContext(AffirmationsContext);

  const { affirmations } = affirmationsContext;

  return (
    <div className='container' style={{ overflow: "visible" }}>
      <ul className='collection'>
        {affirmations.map(affirmation => (
          <AffirmationList key={affirmation.id} affirmation={affirmation} />
        ))}
      </ul>
    </div>
  );
};

export default affirmationContainer;
