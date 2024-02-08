import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./user.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserProvider";

function Users() {
  const { decode } = useContext(UserContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const data = await fetch("http://localhost:3400/user");
    const res = await data.json();
    setUsers(res);
  }

  async function delUser(id) {
    if (decode && decode.role === "admin") {
            await fetch(`http://localhost:3400/user/${id}`, { method: "DELETE" })
            await getUsers()
    }

  }

  return (
    <div>
      <div className="text">
        <h1>news</h1>
        <h1>/</h1>
        <Link to="/user">
          <h1>users</h1>
        </Link>
        <h1>/</h1>
        <Link to="/news">
          <h1>news</h1>
        </Link>
      </div>

      <table id="customers">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Role</th>
          <th>delete</th>
          <th>update</th>
        </tr>

        {users.map((x) => (
          <tr key={x._id}>
            <td>{x._id}</td>
            <td>{x.name}</td>
            <td>{x.role}</td>
            <td>
              <button>update</button>
            </td>
            <td>
              <button onClick={() => delUser(x._id)}>delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Users;