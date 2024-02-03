import React from "react";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Natiqoglu-Home</title>
      </Helmet>
      <Header />
    </div>
  );
}

export default Home;
