import { useFormik } from "formik";
import * as yup from 'yup'

function Register() {
    // refactor 
    const initialValues = {
        name: '',
        email: '',
        password: ''
    };
    const onSubmit = (value) => {
        console.log(value);
    }
    const validate = (value) => {
        let error = {};
            // name validate
            if (!value.name) {
                error.name = 'Required'
            }

            // email validate
            if (!value.email) {
                error.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
                error.email = "invalid email"
            }

            if (!value.password) {
                error.password = 'Required'
            }
            console.log(error);
            return error;
    }

    // yup schema
    const validationSchema = yup.object({
        name: yup.string().required("requrid!"),
        email: yup.string().email('Invalid Email!').required('required!'),
        password:yup.number('please number').required('required!')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate  //TODO: validation with formik
        validationSchema   //TODO: validation with yup lib
    })
    
    console.log('visited indivisul' , formik.touched);


    return (<div style={{ width: '300px', height: "70vh", }}>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type={'text'} id='name' name="name" onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} />
                 {formik.touched.name && formik.errors.name ? <div style={{color: 'red'}}> {formik.errors.name}</div>: null}
            </div>

            <div>
                <label>Email:</label>
                <input type={'email'} id='email' name="email" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} />
                {formik.touched.email && formik.errors.email ? <div style={{color: 'red'}}> {formik.errors.email}</div>: null}
            </div>

            <div>
                <label>password:</label>
                <input type={'password'} id='password' name="password" onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} />
                {formik.touched.password && formik.errors.password ? <div style={{color: 'red'}}> {formik.errors.password}</div>: null}
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>)
}
export default Register;