import React from "react";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import InputFormik from "./InputFormik";
import FormController from "./FormController";

function FormContainer(props) {
  const initialValues = {
    name: "",
  };
  const onSubmit = (value) => {
    console.log("from data", value);
  };
  const validationSchema = yup.object({
    email: yup.string().required("required!").email('Email'),
    name: yup.string().required("please entre your name"),
  });
  return (
    <div className="mx-auto w-96">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
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
              label="Name"
              type="text"
              name="name"
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormContainer;
