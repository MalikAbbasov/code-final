import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./fetch.scss";
import { UserContext } from "../../context/userContext/UserProvider";
import "aos/dist/aos.css";
import ScrollTrigger from "react-scroll-trigger";
import AOS from "aos";
import ContainerRight from "../ContainerRight";
import { NewsContext } from "../../context/newsContext/NewsProvider";

function Fetchsection() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("siyasət");
  const [selectVal, setSelectVal] = useState("");
  const [filter, setFilter] = useState("");
  const { decode, token } = useContext(UserContext);
  const { userId, newsId } = useParams();
  const navigate = useNavigate();

  const [countOn, setCountOn] = useState(false);

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  const getNews = async () => {
    const data = await fetch("http://localhost:3400/news/");
    const res = await data.json();
    setNews(res);
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
  };
  const filteredProducts =
    category === "All"
      ? news
      : news.filter((item) => item.category === category);

  function handleFilter(e) {
    setSelectVal(e.target.value);
  }
  console.log(decode);

  async function likedNews(newsId) {
    try {
      await fetch(
        `http://localhost:3400/news/like/${newsId}/${decode.userId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getNews();
      console.log(decode.userId);
      console.log(userId);
      console.log(newsId);
    } catch (error) {
      alert(
        "Hesabınız yoxdur. Zəhmət olmasa qeydiyyatdan keçin və ya öz hesabınıza giriş edin."
      );
      navigate("/register");
    }
  }

  async function dislikedNews(newsId) {
    try {
      await fetch(
        `http://localhost:3400/news/dislike/${newsId}/${decode.userId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getNews();
      console.log(decode.userId);
      console.log(userId);
      console.log(newsId);
    } catch (error) {
      alert(
        "Hesabınız yoxdur. Zəhmət olmasa qeydiyyatdan keçin və ya öz hesabınıza giriş edin."
      );
      navigate("/register");
    }
  }

  return (
    <div>
      <ScrollTrigger
        onEnter={() => setCountOn(true)}
        onExit={() => setCountOn(false)}
      >
        <section id="fetch">
          <div className="container">
            <div className="container_left">
              <div className="son_xeberler">
                <h1>Son Xəbərlər</h1>
                <div className="lines">
                  <div className="line"></div>
                </div>
                <div className="functions">
                  <div
                    className="sorted"
                    value={selectVal}
                    onChange={(e) => handleFilter(e)}
                  >
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
                      placeholder="Axtarış . . ."
                      onChange={(e) => setFilter(e.target.value)}
                    />
                  </div>
                </div>
                <div className="cards">
                  {filteredProducts

                    .filter((x) => x.name.includes(filter.toLowerCase()))
                    .map((x) => (
                      <div data-aos="fade-up" key={x._id} className="card">
                        <div className="img">
                          <img src={x.image} alt="" />
                          <p className="time">{x.createdAt.slice(0, 10)}</p>
                        </div>
                        <p className={x.category}>{x.category}</p>
                        <p className="name">{x.name}</p>
                        <div className="buttons">
                          <div
                            onClick={() => likedNews(x._id)}
                            className="btn like"
                          >
                            {x.like}
                            <i className="fa-solid fa-thumbs-up"></i>
                          </div>
                          <div
                            onClick={() => dislikedNews(x._id)}
                            className="btn dislike"
                          >
                            {x.dislike}
                            <i className="fa-solid fa-thumbs-down"></i>
                          </div>
                          <div className="btn view">
                            <Link to={`/detail/${x._id}`}>
                              {x.view}
                              <i className="fa-solid fa-eye"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="guncel_xeberler">
                <h1>Güncəl xəbərlər</h1>
                <div className="lines">
                  <div className="line"></div>
                </div>
                <div className="cards">
                  {console.log(news)}
                  {news.slice(7, 12).map((x) => (
                    <div data-aos="fade-right" key={x._id} className="card">
                      <Link>
                        <div className="img">
                          <img src={x.image} alt="" />
                        </div>
                        <div className="info">
                          <p className={x.category}>{x.category}</p>
                          <p className="name">{x.name}</p>
                          <p className="time">{x.createdAt.slice(0, 10)}</p>
                          <p className="about">{x.about.slice(0, 115)} . . .</p>
                          <div className="buttons">
                            <div
                              onClick={() => likedNews(x._id)}
                              className="btn like"
                            >
                              {x.like}
                              <i className="fa-solid fa-thumbs-up"></i>
                            </div>
                            <div
                              onClick={() => dislikedNews(x._id)}
                              className="btn dislike"
                            >
                              {x.dislike}
                              <i className="fa-solid fa-thumbs-down"></i>
                            </div>
                            <Link to={`/detail/${x._id}`} className="btn view">
                              {x.view}
                              <i className="fa-solid fa-eye"></i>
                            </Link>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="container_right">
              <ContainerRight />
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </div>
  );
}

export default Fetchsection;
