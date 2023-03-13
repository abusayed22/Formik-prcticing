import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "../TextError";

function CheckGroupe(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
         return options.map((option) => {
            return (
              <React.Fragment key={option.value}>
                <input
                  id={option.value}
                  {...rest}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
        });
    }}
      </Field>
    <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CheckGroupe;
