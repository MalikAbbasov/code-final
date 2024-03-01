import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserProvider";
import "./userupdate.scss";

function UserUpdate() {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { token, decode } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3400/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ image:image, name:name, role:role }),
    }).then((x) => navigate("/"));

    console.log(name);
    console.log(token);
  }

  async function getUserById(id) {
      const data = await fetch(`http://localhost:3400/user/${id}`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }});
      const res = await data.json();
      console.log(res);
      setImage(res.image);
      setName(res.name);
      setRole(res.role);
    }
  

  useEffect(() => {
    getUserById(id);
  }, [id]);

  function handleChange(e, stateChanger) {
    stateChanger(e.target.value);
  }

  return (
    <div>
      <div id="user-update">
        <div className="container">
          <h1>User update</h1>

          <form action="#" onSubmit={handleSubmit}>

            <p>image</p>
            <input
              type="text"
              value={image}
              onChange={(e) => handleChange(e, setImage)}
            />
            <p>name</p>
            <input
              placeholder="yeni ad"
              type="text"
              value={name}
              onChange={(e) => handleChange(e, setName)}
            />

            {decode.role === "admin" ? (
              <>
                <p>role</p>
                
                <input
                  placeholder="yeni rol"
                  type="text"
                  value={role}
                  onChange={(e) => handleChange(e, setRole)}
                />
                
              </>
            ) : (
              <></>
            )}

            <button>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserUpdate;
