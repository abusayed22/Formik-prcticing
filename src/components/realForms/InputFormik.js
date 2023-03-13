import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "../TextError";

function InputFormik(props) {
  const { label, type, name } = props;
  return (
    <div className="form-cotrol">
      <label htmlFor={label}>{label}</label>
      <Field id={name} type={type} name={name} className="w-96" />
      <ErrorMessage name={name} component={TextError}/>
    </div>
  );
}

export default InputFormik;
