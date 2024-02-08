import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function News() {
    const [news, setNews] = useState([]);


    useEffect(() => {
      fetch("http://localhost:3400/news")
        .then((res) => res.json())
        .then((data) => setNews(data));
    }, []);

  return (
    <div>
        <div className="text">
        <h1>news</h1>
        <h1>/</h1>
        <Link to="/user"><h1>users</h1></Link>
        <h1>/</h1>
        <Link to="/news"><h1>news</h1></Link>
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
            <td>{x.image}</td>
            <td>{x.name}</td>
            <td>{x.about}</td>
            <td><button>update</button></td>
            <td><button>delete</button></td>
          </tr>
        ))}
      </table>

    </div>
  )
}

export default News