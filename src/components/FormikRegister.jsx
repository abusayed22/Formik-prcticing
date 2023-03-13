import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormController from "./realForms/FormController";

function FormikRegister(props) {
  const initialvalues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };
  const onSubmit = (value) => {
    console.log("form", value);
  };
  const validationSchema = yup.object({
    email: yup.string().email("please email").required("required!"),
    password: yup.string().required("required!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), ""], "password must match")
      .required("required!"),
    modeOfContact: yup.string().required("required!"),
    phone: yup
      .string()
      .when("modeOfContact", {
        is: "telephonmoc",
        then: yup.string().required("required!"),
      }),
  });
  const contactOption = [
    {value:'Email',key:'Email'},
    {value:'Phone',key:'Phone'}
  ]
  return (
    <div>
      <Formik
        initialValues={initialvalues}
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
                  <FormController
                      control="input"
                      label="Confirm Password"
                      type="password"
                      name="confirmPassword"
                  />
                  <br />
                 
                  <br />
                  <FormController
                      control="radio"
                      label="Mode Of Contact"
                      type="radio"
                      name="modeOfContact"
                      options={contactOption}
                  />
                  <br />
                  <FormController
                      control="input"
                      label="Phone"
                      type="text"
                      name="phone"
                  />
                  <br />

              <br />
              <button type="onSubmit">Register</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormikRegister;
