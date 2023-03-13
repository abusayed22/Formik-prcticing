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
    console.log('hello');
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
        onSubmit={onSubmit}
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
