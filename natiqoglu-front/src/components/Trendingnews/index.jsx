import React, { useEffect, useState } from "react";
import "./trending.scss";
import AOS from "aos";


function Trendingnews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3400/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <div>
      <div id="trending">
        <div className="container">
          <h4>Ən yeni Xəbərlər</h4>
          <div className="lines">
            <div className="line"></div>
            <div className="line color"></div>
            <div className="line"></div>
          </div>
          <div className="cards">
            {news.slice(0,3).map((x) => (
              <div data-aos="flip-up" className="card" key={x._id}>
                <div className="image">
                <img src={x.image} alt="" />
                </div>
                <h4>{x.name}</h4>
                <div className="buttons">
                  <div className="btn like">
                    <p>{x.like}</p>
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="btn dislike">
                    <p>{x.dislike} </p>
                    <i className="fa-solid fa-thumbs-down"></i>
                  </div>
                  <div className="btn view">
                    <p>{x.view}</p>
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trendingnews;
