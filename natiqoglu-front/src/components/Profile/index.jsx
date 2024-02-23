import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserProvider";
import "./profile.scss";

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const { decode } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect((token) => {
    fetch(`http://localhost:3400/user/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div>
      <div id="profile">
        <div className="container">
          {decode ? (
            <>
              <div className="image">
                <img src={decode.image} alt="" />
                <h1>{decode.name}</h1>
                <h3>{decode.email}</h3>
                <p>{decode.role}</p>
              </div>
              <div className="info">
                <div className="name">
                  <h3>Name</h3>
                  <p>{decode.name}</p>
                </div>
                <div className="name">
                  <h3>Email</h3>
                  <p>{decode.email}</p>
                </div>
                <div className="role">
                  <h3>Role</h3>
                  <p>{decode.role}</p>
                </div>
              </div>
            </>
          ) : (
            navigate("/")
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
