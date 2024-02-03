import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

function Footer() {
  const [news, setNews] = useState([]);
  const [count, setCount] = useLocalStorage("count","0");


  const viewCounter = () =>{
    setCount(count+1)
    console.log(count);
  }
  

  useEffect(() => {
    fetch("http://localhost:3400/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div>
      <h1>news</h1>

      {news.map((x) => (
        <div onClick={viewCounter}> 
          <p>{x.name}</p>
          <p>{x.about}</p>
          <p>{count}</p>
        </div>
      ))}
    </div>
  );
}

export default Footer;
