import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserProvider";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./news.scss";

function News() {
  const [news, setNews] = useState([]);
  const { decode, token } = useContext(UserContext);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const data = await fetch("http://localhost:3400/news/");
    const res = await data.json();
    setNews(res);
  };

  async function delNewsById(id) {
    if (decode && decode.role === "admin") {
      await fetch(`http://localhost:3400/news/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      await getNews();
      console.log(decode.role);
      console.log(token);
    }
  }

  async function addNews(item) {
    if (decode && decode.role === "admin") {
      await fetch("http://localhost:3400/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    }
    await getNews();
  }

  return (
    <div>
      <div id="news">
        <div className="container">
          <div className="text">
            <h1>News</h1>
          </div>

          <Formik
            initialValues={{ image: "", name: "", about: "", category: "" }}
            validationSchema={Yup.object({
              image: Yup.string().required("Required"),
              name: Yup.string().required("Required"),
              about: Yup.string().required("Required"),
              category: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                setSubmitting(false);
                addNews(values);
                resetForm();
              }, 400);
            }}
          >
            <Form>
              <label htmlFor="image">
                <p>Image Url</p>
              </label>
              <Field name="image" type="text" />
              <h4>
                <ErrorMessage name="image" />
              </h4>

              <label htmlFor="name">
                <p>Name</p>
              </label>
              <Field name="name" type="text" />
              <h4>
                <ErrorMessage name="name" />
              </h4>

              <label htmlFor="about">
                <p>About</p>
              </label>
              <Field name="about" type="text" />
              <h4>
                <ErrorMessage name="about" />
              </h4>

              <label htmlFor="category">
                <p>Category</p>
              </label>
              <Field name="category" type="text" />
              <h4>
                <ErrorMessage name="category" />
              </h4>

              <button type="submit">Əlavə edin</button>
            </Form>
          </Formik>

          <div className="cards">
            {news.map((x) => (
              <div key={x._id} className="card">
                <div className="image">
                  <img src={x.image} alt="" />
                  <h2>{x.name}</h2>
                </div>
                <div className="text">
                  <p>{x.about}</p>
                  <div className="likes">
                    <p>like: {x.like}</p>
                    <p>dislike: {x.dislike}</p>
                    <p>view: {x.view}</p>
                  </div>
                  <div className="buttons">
                    <button onClick={() => delNewsById(x._id)}>Delete</button>
                    <Link to={`/newsupdate/${x._id}`}>
                      <button>Update</button>
                    </Link>
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

export default News;
