import React, { Fragment } from "react";
import AffirmationForm from "../affirmations/affirmationForm";
// import AffirmationItem from "../affirmations/affirmationItem";
import AffirmationContainer from "../affirmations/affirmationContainer";

const Affirmations = () => {
  return (
    // This will have a carousel that takes affirmations from MongoDB and flashes them across the screen in set intervals.
    // Will have functionality to see affirmations all at once, and add them, subtract them, etc.

    <Fragment>
      <AffirmationContainer />
      <AffirmationForm />
      {/* <AffirmationItem /> */}
    </Fragment>
  );
};

export default Affirmations;
