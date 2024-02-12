import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext/UserProvider";
import {  useNavigate } from "react-router-dom";
import "./login.scss";

function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { addToken } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3400/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        addToken(data);
        navigate("/");
      });
    // console.log(password);
  }

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
        />
        <br />
        <button>login</button>
      </form>
    </div>
  );
}

export default LoginPage;
