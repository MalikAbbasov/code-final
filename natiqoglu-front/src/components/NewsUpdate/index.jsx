import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserProvider";
import "./newsupdate.scss";

function NewsUpdate() {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const { token } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(category);
    fetch(`http://localhost:3400/news/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ image, name, about, category }),
    }).then((x) => navigate("/news"));
  }

  async function getNewsById(id) {
    const data = await fetch(`http://localhost:3400/news/${id}`);
    const res = await data.json();
    setImage(res.image);
    setName(res.name);
    setAbout(res.about);
    setCategory(res.category);
  }

  useEffect(() => {
    getNewsById(id);
  }, [id]);

  function handleChange(e, stateChanger) {
    stateChanger(e.target.value);
  }

  return (
    <div>
      <div id="newsUpdate">
        <div className="container">
          <h1>News Update</h1>
          <form action="#" onSubmit={handleSubmit}>
            <div className="image_url change">
              <h2>Image Url</h2>
              <textarea
                type="text"
                value={image}
                onChange={(e) => handleChange(e, setImage)}
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="name change">
              <h2>Name</h2>
              <textarea
                type="text"
                value={name}
                onChange={(e) => handleChange(e, setName)}
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="about change">
              <h2>About</h2>
              <textarea
                className="about"
                type="text"
                value={about}
                onChange={(e) => handleChange(e, setAbout)}
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="category change">
              <h2>Category</h2>
              <input
                type="text"
                value={category}
                onChange={(e) => handleChange(e, setCategory)}
              />
            </div>
            <button>update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsUpdate;
