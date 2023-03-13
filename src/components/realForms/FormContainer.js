import React from "react";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
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
        description: yup.string().required('required!')
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
                        <FormController
                            control='textarea'
                            label='Description:'
                            type="text"
                            name="description"
                        />
                        <br />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormContainer;
