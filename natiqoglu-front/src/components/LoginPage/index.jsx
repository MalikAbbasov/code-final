import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function LoginPage() {
  return (
    <div>
      <Formik
        initialValues={{ name: "", password: "", image: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          image: Yup.string()
            .image("Invalid image address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="name">First Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="password">Last Name</label>
          <Field name="password" type="text" />
          <ErrorMessage name="password" />

          <label htmlFor="image">Email Address</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginPage;
