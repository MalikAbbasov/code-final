import React from "react";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";
import Fetchsection from "../../components/Fetchsection";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Natiqoglu-Home</title>
      </Helmet>
      <Header />
      <Fetchsection/>
    </div>
  );
}

export default Home;
