import React from "react";
import "./footer.scss"

function Footer() {
  // const [news, setNews] = useState([]);
  // const [count, setCount] = useLocalStorage("count","0");
  // const viewCounter = () =>{
  //   setCount(count+1)
  //   console.log(count);
  // }
  // useEffect(() => {
  //   fetch("http://localhost:3400/news")
  //     .then((res) => res.json())
  //     .then((data) => setNews(data));
  // }, []);

  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="rules">
            <h2>İSTİFADƏ QAYDALARI</h2>
            <p>
              Müəllif hüquqları qorunur. Məlumatdan istifadə etdikdə istinad
              mütləqdir. Məlumat internet səhifələrində istifadə edildikdə
              müvafiq keçidin qoyulması mütləqdir.
            </p>
          </div>
          <div className="contact">
            <h2>BİZİMLƏ ƏLAQƏ</h2>
            <ul>
              <li>
              <i className="fa-solid fa-location-dot"></i>
              <p>Bakı şəhəri, Binəqədi rayonu, Qəzənfər Musabəyov küçəsi</p>
              </li>
              <li>
              <i className="fa-solid fa-phone"></i>
              <p>055-249-91-32</p>
              </li>
              <li>
              <i className="fa-solid fa-envelope"></i>
              <p>malik.abbasov03@gmail.com</p>
              </li>
              <li>
              <i className="fa-brands fa-square-instagram"></i>
              <p>_malik_abbasov_</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* {news.map((x) => (
        <div onClick={viewCounter}> 
          <p>{x.name}</p>
          <p>{x.about}</p>
          <p>{count}</p>
        </div>
      ))} */}
    </div>
  );
}

export default Footer;
