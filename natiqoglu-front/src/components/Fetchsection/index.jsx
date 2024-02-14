import React, { useEffect, useState } from "react";
import "./fetch.scss";
import { Link } from "react-router-dom";

function Fetchsection() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("All");
  const [selectVal, setSelectVal] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:3400/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const handleCategoryClick = (category) => {
    setCategory(category);
    console.log(selectVal);
    console.log("salam");
  };
  const filteredProducts =
    category === "All"
      ? news
      : news.filter((item) => item.category === category);

  function handleFilter(e) {
    setSelectVal(e.target.value);
  }

  return (
    <div>
      <section id="fetch">
        <div className="container">
          <h1>Son Xəbərlər</h1>
          <div className="functions">
            <div
              className="sorted"
              value={selectVal}
              onChange={(e) => handleFilter(e)}
            >
              <button onClick={() => handleCategoryClick("All")}>
                Baş xəbərlər
              </button>
              <button onClick={() => handleCategoryClick("siyasət")}>
                Siyasət
              </button>
              <button onClick={() => handleCategoryClick("idman")}>
                Idman
              </button>
              <button onClick={() => handleCategoryClick("İqtisadiyyat")}>
                İqtisadiyyat
              </button>
              <button onClick={() => handleCategoryClick("Mədəniyyət")}>
                Mədəniyyət
              </button>
            </div>
            <div className="filter">
              <input
                type="text"
                placeholder="Axtarış"
                onChange={(e) => setFilter(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="cards">
            {filteredProducts
                  .filter((x) => x.name.includes(filter.toLowerCase()))
                  .map((x) => (
                    <div key={x._id} className="card" onClick={(x)=>x.view++}>
                      <div className="img">
                        <img src={x.image} alt="" />
                        <p className="time">{x.createdAt.slice(0, 10)}</p>
                      </div>
                      <p>{x.name}</p>
                      <p>{x.category}</p>
                      <p>{x.view}s</p>
                      {console.log(x.view)}
                      <Link>Ətraflı</Link>
                    </div>
                  ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fetchsection;
