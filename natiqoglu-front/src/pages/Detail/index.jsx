import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./detail.scss";
import { Helmet } from "react-helmet-async";

function Detail() {
  const { id } = useParams();
  const [news, setNews] = useState([]);

  const getNewsById = async () => {
    const data = await fetch(`http://localhost:3400/news/${id}`);
    const res = await data.json();
    setNews(res);
  };

  useEffect(() => {
    getNewsById();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Natiqoglu-Detail</title>
      </Helmet>
      <section id="detail">
        <div className="container">
          <div className="card">
            <div className="image">
              <img src={news.image} alt="" />
              <h2>{news.name}</h2>
            </div>
            <div className="text">
              <p>{news.about}</p>
              <div className="likes">
                <p>like: {news.like}</p>
                <p>dislike: {news.dislike}</p>
                <p>view: {news.view}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail;
