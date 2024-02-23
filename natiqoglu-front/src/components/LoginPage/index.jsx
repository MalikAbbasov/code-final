import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext/UserProvider";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addToken,token } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();


    fetch("http://localhost:3400/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        addToken(data);
        navigate("/");
      });

  }

  return (
    <div>
      <div id="login">
        <div className="container">
          <h1>Daxil Ol</h1>
          <form onSubmit={handleSubmit}>
            <h3>Məlumatlarınızı daxil edin</h3>
            <div className="text">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Adınızı daxil edin"
              />
            </div>
            <div className="text">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Mailinizi daxil edin"
              />
            </div>
            <div className="text">
              <input
                value={password}
                className="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Parolunuzu daxil edin"
              />
            </div>
            <div className="go_register">
              <Link to="/register">
                <h4>Qeydiyyat</h4>
              </Link>
              <Link>
                <h4>Parolunuzu unutmusunuz?</h4>
              </Link>
            </div>
            <button>Daxil ol</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
