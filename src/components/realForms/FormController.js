import React from 'react';
import InputFormik from './InputFormik';
import Textarea from './Textarea';
import Select from './Select';

function FormController(props) {
    const {control,...rest} = props
        switch (control) {
            case 'input':
                return <InputFormik {...rest} />
            case 'textarea':
                return <Textarea {...rest} />
            case 'select':
                return <Select {...rest}/>
            case 'radio':
            case 'checkbox':
            case 'date':
                
            default:
                return null
        }
}

export default FormController;