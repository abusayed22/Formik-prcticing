import FormikRegister from "./components/FormikRegister";
import Login from "./components/Login";
import Register from "./components/OldRegister";
import FormContainer from "./components/realForms/FormContainer";

function App() {
  return (
    <div className="App">
      <h2 style={{textAlign:'center'}}>Wellcome Formik </h2>
      {/* <FormContainer /> */}
      {/* <Login /> */}
      <FormikRegister />
    </div>
  );
}

export default App;
