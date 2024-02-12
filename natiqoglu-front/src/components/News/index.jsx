import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserProvider";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function News() {
  const [news, setNews] = useState([]);
  const { decode, token } = useContext(UserContext);

  useEffect(() => {
    getNews();
  }, []);

  async function getNews() {
    const data = await fetch("http://localhost:3400/news");
    const res = await data.json();  
    setNews(res);
  }

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
    await fetch("http://localhost:3400/news", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    })
    await getNews()
}

  return (
    <div>
      <div className="text">
        <h1>news</h1>
        <h1>/</h1>
        <Link to="/user">
          <h1>users</h1>
        </Link>
        <h1>/</h1>
        <Link to="/news">
          <h1>news</h1>
        </Link>
      </div>
      <Formik
        initialValues={{ image: "", name: "", about: "" }}
        validationSchema={Yup.object({
          image: Yup.string().required("Required"),
          name: Yup.string().required("Required"),
          about: Yup.string().required("Required"),
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

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <table id="customers">
        <tr>
          <th>image</th>
          <th>Name</th>
          <th>About</th>
          <th>Category</th>
          <th>update</th>
          <th>delete</th>
        </tr>

        {news.map((x) => (
          <tr key={x._id}>
            <td>
              <img src={x.image} alt="" />
            </td>
            <td>{x.name}</td>
            <td>{x.about}</td>
            <td>{x.category}</td>
            <td>
              <Link to={`/newsupdate/${x._id}`}><button>update</button></Link>
            </td>
            <td>
              <button onClick={() => delNewsById(x._id)}>delete</button>
            </td>
          </tr>
        ))}
      </table>

    </div>
  );
}

export default News;
