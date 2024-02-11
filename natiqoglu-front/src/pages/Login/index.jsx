import React from "react";
import LoginPage from "../../components/LoginPage";
import { Helmet } from "react-helmet-async";

function Login() {
  return (
    <div>
      <Helmet>
        <title>Natiqoglu-login</title>
      </Helmet>
      <LoginPage />
    </div>
  );
}

export default Login;
