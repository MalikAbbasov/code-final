import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserProvider";

function News() {
  const [news, setNews] = useState([]);
  const { decode,token } = useContext(UserContext);

  useEffect(() => {
    getNews();
  }, []);

  async function getNews() {
    const data = await fetch("http://localhost:3400/news");
    const res = await data.json();
    setNews(res);
  }

  async function delNewsById(id) {
    if (decode && decode.role === "admin") {
      await fetch(`http://localhost:3400/news/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      await getNews();
      console.log(decode.role);
      console.log(token);
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
          <th>image</th>
          <th>Name</th>
          <th>About</th>
          <th>delete</th>
          <th>update</th>
        </tr>

        {news.map((x) => (
          <tr key={x._id}>
            <td>
              <img src={x.image} alt="" />
            </td>
            <td>{x.name}</td>
            <td>{x.about}</td>
            <td>
              <button>update</button>
            </td>
            <td>
              <button onClick={() => delNewsById(x._id)}>delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default News;
