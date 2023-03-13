import React from "react";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import FormController from "./FormController";

function FormContainer(props) {
    const initialValues = {
        email: "",
        name: "",
        description: "",
        selectOptions:""
    };
    const onSubmit = (value) => {
        console.log("from data", value);
    };
    const validationSchema = yup.object({
        email: yup.string().required("required!").email('Email'),
        name: yup.string().required("please entre your name"),
        description: yup.string().required('required!'),
        selectOptions: yup.string().required('required!')
    });
    const dropDownOptions =  [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
      ]

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
                        <FormController
                            control='select'
                            label='Select tag:'
                            type="select"
                            name="selectOptions"
                            options={dropDownOptions}
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
