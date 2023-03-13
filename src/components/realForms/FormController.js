import React from 'react';
import InputFormik from './InputFormik';

function FormController(props) {
    const {control,...rest} = props
        switch (control) {
            case 'input':
                return <InputFormik {...rest} />
            case 'textarea':
            case 'select':
            case 'radio':
            case 'checkbox':
            case 'date':
                
            default:
                return null
        }
}

export default FormController;