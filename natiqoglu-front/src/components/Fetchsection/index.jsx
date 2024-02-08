import React, { useEffect, useState } from 'react'
import "./fetch.scss"
import { Link } from 'react-router-dom';

function Fetchsection() {
    const [news, setNews] = useState([]);


    useEffect(() => {
      fetch("http://localhost:3400/news")
        .then((res) => res.json())
        .then((data) => setNews(data));
    }, []);
    
  return (
    <div>

      {news.map((x) => (
        <div key={x._id} className='news' > 
          <p>{x.name}</p>
          <p>{x.about}</p>
          <Link>detail</Link>
        </div>
      ))}
    </div>
  )
}

export default Fetchsection