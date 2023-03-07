import { useFormik } from "formik";

function Register() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: ( value ) => {
            console.log(value);
        }
    })

    return (<div style={{ width: '300px', height: "70vh", }}>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type={'text'} id='name' name="name" value={formik.values.name} onChange={formik.handleChange}/>
            </div>

            <div>
                <label>Email:</label>
                <input type={'email'} id='email' name="email" value={formik.values.email} onChange={formik.handleChange} />
            </div>

            <div>
                <label>password:</label>
                <input type={'password'} id='password' name="password" value={formik.values.password} onChange={formik.handleChange}/>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>)
}
export default Register;