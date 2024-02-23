import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserProvider";
import Aos from "aos";
import "./right.scss";
import image_instgram from "./intg.jpeg";
import image_youtube from "./youtube.jpeg";
import { useEffect } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";


function ContainerRight() {
  const [news, setNews] = useState([]);
  const { decode, token } = useContext(UserContext);
  const { userId, newsId } = useParams();  
  const navigate = useNavigate()

  const [countOn, setCountOn] = useState(false);

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  const getNews = async () => {
    const data = await fetch("http://localhost:3400/news/");
    const res = await data.json();
    setNews(res);
  };

  async function likedNews(newsId) {
    await fetch(`http://localhost:3400/news/like/${newsId}/${decode.userId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
     getNews()
    console.log(decode.userId);
    console.log(userId);
    console.log(newsId);
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
    <ScrollTrigger
      onEnter={() => setCountOn(true)}
      onExit={() => setCountOn(false)}
    >
      <div>
        <div className="container_right">
          <div className="raiting">
            <div className=" rait facebook" data-aos="flip-right">
              <i className="fa-brands fa-facebook"></i>
              <p>{countOn && <CountUp start={0} end={123} duration={2} />}</p>
              <span>Fan</span>
            </div>
            <div className="rait instagram" data-aos="flip-right">
              <i className="fa-brands fa-square-instagram"></i>
              <span>
                {countOn && <CountUp start={0} end={432} duration={2} />}
              </span>
              <span>Takipci</span>
            </div>
            <div className="rait youtube" data-aos="flip-right">
              <i className="fa-brands fa-youtube"></i>
              <p>{countOn && <CountUp start={0} end={548} duration={2} />}</p>
              <span>Abonə</span>
            </div>
          </div>

          <div className="one_card">
            <h1>Ən yeni xəbərlər</h1>
            <div className="lines">
              <div className="line"></div>
            </div>
            {news.slice(13, 14).map((x) => (
              <div data-aos="fade-up" key={x._id} className="card">
                <div className="img">
                  <img src={x.image} alt="" />
                  <p className="time">{x.createdAt.slice(0, 10)}</p>
                </div>
                <p className={x.category}>{x.category}</p>
                <p className="name">{x.name}</p>
                <div className="buttons">
                  <div onClick={decode ? ()=>likedNews(x._id) : <></>} className="btn like">
                    {x.like}
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="btn dislike">
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

          <div className="scroll_news">
            {news.map((x) => (
              <div key={x._id} className="card">
                <div className="image">
                  <img src={x.image} alt="" />
                </div>
                <div className="info">
                  <h6>{x.name}</h6>
                  <div className="buttons">
                    <div onClick={()=>likedNews(x._id)} className="btn like">
                      {x.like}
                      <i className="fa-solid fa-thumbs-up"></i>
                    </div>
                    <div onClick={()=>dislikedNews(x._id)} className="btn dislike">
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
              </div>
            ))}
          </div>

          <div className="login">
            <div className="image">
              <div className="text">
                <p>
                  Kanaldan məmnun qaldınızsa və yeni xəbərlərdən xəbərdar olmaq
                  istəyirsinizsə bizi izləmədə qalın{" "}
                </p>
                <Link to="/register">Qeydiyyat</Link>
              </div>
            </div>
          </div>

          <div className="subscribe">
            <h1>Ən yeni xəbərlər</h1>
            <div className="lines">
              <div className="line"></div>
            </div>
            <div className="links">
              <div className="link">
                <img src={image_youtube} alt="" />
                <div className="text">
                  <div className="name">
                    <h3>YouTube</h3>
                    <i className="fa-brands fa-youtube"></i>
                  </div>
                  <a href="https://www.youtube.com/watch?v=AhNSZPo-aOI&t=693s">
                    Linkə keçid
                  </a>
                </div>
              </div>
              <div className="link">
                <img src={image_instgram} alt="" />
                <div className="text">
                  <div className="name">
                    <h3>İnstagram</h3>
                    <i className="fa-brands fa-square-instagram"></i>
                  </div>
                  <p>_malik_abbasov_</p>
                </div>
              </div>
              <div className="gmail link">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Zh3XBurQcYIu2LHPRcI3YUsp8BUTU291iw&usqp=CAU"
                  alt=""
                />
                <div className="text">
                  <div className="name">
                    <h3>Gmail</h3>
                    <i className="fa-solid fa-envelope-circle-check"></i>
                  </div>
                  <p>malik.abbasov03@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default ContainerRight;
