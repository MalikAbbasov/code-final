import React, { useContext } from "react";
import { UserContext } from "../../context/userContext/UserProvider";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function RegisterPage() {
  const { addToken } = useContext(UserContext);
  const navigate = useNavigate();

  async function addUser(item) {
    await fetch("http://localhost:3400/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        addToken(data);
        navigate("/");
      });
  }

  return (
    <div>
      <div id="register">
        <div className="container">
          <h1>Qeydiyyat</h1>
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={Yup.object({
              name: Yup.string().required("Məlumatı daxil edin"),
              password: Yup.string().required("Məlumatı daxil edin"),
              email: Yup.string()
                .email("Məlumatı düzgün daxil edin")
                .required("Məlumatı daxil edin"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                setSubmitting(false);
                addUser(values);
                resetForm();
              }, 400);
            }}
          >
            <Form>
              <h5>Məlumatlarınızı daxil edin</h5>
              <Field placeholder="Adınızı daxil edin" name="name" type="text" />
              <h4>
                <ErrorMessage name="name" />
              </h4>

              <Field name="email" placeholder="Mailinizi daxil edin" type="email" />
              <h4>
                <ErrorMessage name="email" />
              </h4>

              <Field
                placeholder="Parolunuzu daxil edin"
                className="password"
                name="password"
                type="password"
              />
              <h4>
                <ErrorMessage name="password" />
              </h4>

              <div className="go_register">
                <Link to="/login">
                  <h4>Daha öncə qeydiyyatdan keçmisiniz?</h4>
                </Link>
              </div>

              <button type="submit">Qeydiyyat</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
