import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormController from "./realForms/FormController";

function Login(props) {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (value) => {
    console.log("submit done", value);
  };
  const validationSchema = yup.object({
    email: yup.string().email("please valid your Email").required("required!"),
    password: yup.string().required("required!"),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <FormController
                control="input"
                label="Email"
                type="email"
                name="email"
              />
              <br />
              <FormController
                control="input"
                label="Password"
                type="password"
                name="password"
              />

              <br />
              <button type="onSubmit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;
