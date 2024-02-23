import React from "react";
import RegisterPage from "../../components/RegisterPage";
import { Helmet } from "react-helmet-async";

function Register() {
  return (
    <div>
      <Helmet>
        <title>Natiqoglu-Register</title>
      </Helmet>
      <RegisterPage />
    </div>
  );
}

export default Register;
