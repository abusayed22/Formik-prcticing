import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "../TextError";

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options?.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage component={TextError} name={name}/>
    </div>
  );
}

export default Select;

<Field name="color" as="select">
   <option value="red">Red</option>
   <option value="green">Green</option>
   <option value="blue">Blue</option>
 </Field>