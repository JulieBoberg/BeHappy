import React, { Fragment } from "react";
import AffirmationForm from "../affirmations/AffirmationForm";
// import AffirmationList from "../affirmations/AffirmationsList";

//import AffirmationCarousel from "../affirmations/AffirmationCarousel";
import AffirmationContainer from "../affirmations/AffirmationContainer";

const Affirmations = () => {
  return (
    <Fragment>
      <AffirmationContainer />
      <AffirmationForm />
      {/* <AffirmationList /> */}
    </Fragment>
  );
};

export default Affirmations;
