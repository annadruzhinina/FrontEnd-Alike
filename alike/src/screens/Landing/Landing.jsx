import React from "react";
import "./landing.css";
import SignUp from "../../components/SignUp/SignUp.jsx";

function Landing() {
  return (
    <section className="landing">
      <section className="landingDesign">
          <section className="phoneOne"></section>
          <section className="phoneTwo"></section>
      </section>
      <section className="formContainer">
        <SignUp />
      </section>

    </section>
  );
}

export default Landing;
