import React from 'react';
import InputFormik from './InputFormik';
import Textarea from './Textarea';
import Select from './Select';
import Radio from './Radio';
import CheckGroupe from './CheckGroupe';
import DatePicker from './DatePicker';

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
                return <Radio {...rest} />
            case 'checkbox':
                return <CheckGroupe {...rest}/>
            case 'date':
                return <DatePicker {...rest}/>
                
            default:
                return null
        }
}

export default FormController;