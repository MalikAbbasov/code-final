import React from "react";
import Header from "../../components/Header";
import Fetchsection from "../../components/Fetchsection";
import { Helmet } from "react-helmet-async";
import Animationsection from "../../components/Animationsection";
import Trendingnews from "../../components/Trendingnews";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Natiqoglu-Home</title>
      </Helmet>
      <Header />
      <Animationsection/>
      <Trendingnews/>
      <Fetchsection/>
    </div>
  );
}

export default Home;
