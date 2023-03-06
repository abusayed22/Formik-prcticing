import { useFormik } from "formik";

function Register() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },

    })

    return(<div style={{width: '300px',height: "70vh",}}>
        <form>
            <label>Name:</label>
            
        </form>
    </div>)
}
export default Register;