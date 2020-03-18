import React, { useContext, useEffect } from "react";
import AffirmationsContext from "../../context/affirmations/affirmationsContext";
import AffirmationsItem from "./AffirmationsItem";

const AffirmationsList = () => {
  const affirmationsContext = useContext(AffirmationsContext);

  const { affirmations, getAffirmation } = affirmationsContext;

  // I'm having trouble with the dual requestions for getAffirmations() in lists and container. Maybe I need to make
  // 2 seperate get requets and make a seperate getAffirmations() to avoid the confusion.

  useEffect(() => {
    getAffirmation();

    // eslint-disable-next-line
  }, []);

  return (
    <div className='container' style={{ overflow: "visible" }}>
      {/* This is the list of affirmation items that will cycle through with maps in gratitude form */}
      <ul className='collection'>
        {affirmations.map(affirmation => (
          <AffirmationsItem key={affirmation._id} affirmation={affirmation} />
        ))}
      </ul>
    </div>
  );
};

export default AffirmationsList;
