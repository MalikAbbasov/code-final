import React from "react";
import AboutPage from "../../components/AboutPage";
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <div>
      <Helmet>
        <title>Natiqoglu-about</title>
      </Helmet>
      <AboutPage/>
    </div>
  );
}

export default About;
