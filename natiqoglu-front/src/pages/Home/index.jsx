import React from "react";
import Header from "../../components/Header";
import Fetchsection from "../../components/Fetchsection";
import { Helmet } from "react-helmet-async";
import Users from "../../components/Users";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Natiqoglu-Home</title>
      </Helmet>
      <Header />
      {/* <Fetchsection/> */}
      {/* <Users/> */}
    </div>
  );
}

export default Home;
