import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserProvider";

function NewsUpdate() {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const {  token } = useContext(UserContext);

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
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          value={image}
          onChange={(e) => handleChange(e, setImage)}
        />
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, setName)}
        />
        <br />
        <input
          type="text"
          value={about}
          onChange={(e) => handleChange(e, setAbout)}
        />
        <br />
        <input
          type="text"
          value={category}
          onChange={(e) => handleChange(e, setCategory)}
        />
        <br />
        <button>update</button>
      </form>
      <h1>salam</h1>
    </div>
  );
}

export default NewsUpdate;
