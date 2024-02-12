import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext/UserProvider";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const {addToken} = useContext(UserContext)
    const navigate = useNavigate()
  
  
    function handleSubmit(e) {
      e.preventDefault()
      console.log(password);
      fetch("http://localhost:3400/register",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:name,
          password:password,
        })
      })
      
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        addToken(data)
        navigate("/")
      })
      .catch((error)=>console.log(error.message))
  }
  
  return (
    <div>
      <h1>register</h1>
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
        <button>register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
