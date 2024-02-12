import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserProvider";

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const { decode } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:3400/user/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <img src={decode.image} alt="" />
      <p>{decode.name}</p>
    </div>
  );
}

export default Profile;
