import React from "react";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import FormController from "./FormController";

function FormContainer(props) {
    const initialValues = {
        email: "",
        name: "",
        description: "",
        selectOptions:"",
        radioSelect: "",
        areChecking: [],
        birthDate: null
    };
    const onSubmit = (value) => {
        console.log("from data", value);
    };
    const validationSchema = yup.object({
        email: yup.string().required("required!").email('Email'),
        name: yup.string().required("please entre your name"),
        description: yup.string().required('required!'),
        selectOptions: yup.string().required('required!'),
        radioSelect: yup.string().required('required!'),
        areChecking: yup.array().required('required!'),
        birthDate: yup.date().required('requried!').nullable()
    });
    const dropDownOptions =  [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
      ]
    const radioOptions =  [
        { key: 'Option 1', value: 'ROption1' },
        { key: 'Option 2', value: 'ROption2' },
        { key: 'Option 3', value: 'ROption3' }
      ]
    const checkboxOptions =  [
        { key: 'Option 1', value: 'cOption1' },
        { key: 'Option 2', value: 'cOption2' },
        { key: 'Option 3', value: 'cOption3' }
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
                        <FormController
                            control='radio'
                            label='Select one:'
                            type="radio"
                            name="radioSelect"
                            options={radioOptions}
                        />
                        <br />
                        <FormController
                            control='checkbox'
                            label='Select one:'
                            type="checkbox"
                            name="areChecking"
                            options={checkboxOptions}
                        />
                        <br />
                        <FormController 
                        control="dat"
                        label="Birth Day:"
                        name="birthDay"
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
