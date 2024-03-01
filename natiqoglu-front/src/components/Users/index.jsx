import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./user.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserProvider";

function Users() {
  const { decode, token } = useContext(UserContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const data = await fetch("http://localhost:3400/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await data.json();
    setUsers(res);
  }

  async function delUserById(id) {
    if (decode && decode.role === "admin") {
      await fetch(`http://localhost:3400/user/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      await getUsers();
      console.log(decode.role);
      console.log(token);
    }
  }

  return (
    <div>
      <div id="user">
        <div className="container">
          <div className="text">
            <h1>Users</h1>
          </div>

          <table id="customers">
            <tr>
              <th>Id</th>
              <th>image</th>
              <th>Name</th>
              <th>Role</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>

            {users.map((x) => (
              <tr key={x._id}>
                <td>{x._id}</td>
                <td>
                  <img src={x.image} alt="" />
                </td>
                <td>{x.name}</td>
                <td>{x.role}</td>
                <td>
                  <Link to={`/userupdate/${x._id}`}>
                    <button>Update</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => delUserById(x._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
