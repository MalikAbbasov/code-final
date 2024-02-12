import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserProvider";

function UserUpdate() {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { token } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3400/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ image, name, role }),
    }).then((x) => navigate("/user"));
  }

  async function getUserById(id) {
    const data = await fetch(`http://localhost:3400/user/${id}`);
    const res = await data.json();
    setImage(res.image)
    setName(res.name)
    setRole(res.role)
  }

  useEffect(() => {
    getUserById(id);
  }, [id]);

  function handleChange(e, stateChanger) {
    stateChanger(e.target.value);
  }

  return (
    <div>
        <h1>user update</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          value={image}
          onChange={(e) => handleChange(e, setImage)}
        />
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, setName)}
        />
        <br />
        <input
          type="text"
          value={role}
          onChange={(e) => handleChange(e, setRole)}
        />
        <br />
        <button>update</button>
      </form>
    </div>
  );
}

export default UserUpdate;
