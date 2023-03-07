import {Formik,Form,Field,ErrorMessage} from "formik";
import * as yup from "yup";

function OldRegister() {
  // refactor
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const onSubmit = (value) => {
    console.log(value);
  };
  const validate = (value) => {
    let error = {};
    // name validate
    if (!value.name) {
      error.name = "Required";
    }

    // email validate
    if (!value.email) {
      error.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
      error.email = "invalid email";
    }

    if (!value.password) {
      error.password = "Required";
    }
    console.log(error);
    return error;
  };

  // yup schema
  const validationSchema = yup.object({
    name: yup.string().required("requrid!"),
    email: yup.string().email("Invalid Email!").required("required!"),
    password: yup.number("please number").required("required!"),
  });



  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onsubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field
            type={"text"}
            id="name"
            name="name"
          />
          <ErrorMessage name="name"/>
        </div>

        <div>
          <label>Email:</label>
          <Field
            type={"email"}
            id="email"
            name="email"
          />
          <ErrorMessage name="email"/>
        </div>

        <div>
          <label>password:</label>
          <Field
            type={"password"}
            id="password"
            name="password"
          />
          <ErrorMessage name="password"/>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
export default OldRegister;
