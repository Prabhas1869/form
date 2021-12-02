import { useFormik } from "formik";
import Input from "../Input";
import { Button } from "@mui/material";
import { validationSchema } from "../../Schemas/FormSchema";
import GoogleLogin from "../../Components/GoogleLogin";
import app from "../../Firebase/Firebase";
// import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

function Sign() {
  const {
    handleSubmit,
    touched,
    errors,
    getFieldProps,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });
  function SignIn(){
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <div className="App">
      <div className="form_container">
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <Input
            icon={"far fa-envelope"}
            placeholder={"Email ID"}
            type={"email"}
            {...getFieldProps("email")}
          />
          {touched.email && errors.email ? (
            <div className="errorMessage">*{errors.email}</div>
          ) : null}

          <Input
            icon={"fas fa-key"}
            placeholder={"Password"}
            type="password"
            {...getFieldProps("password")}
          />
          {touched.password && errors.password ? (
            <div className="errorMessage">*{errors.password}</div>
          ) : null}

          <Button type={"submit"} fullWidth variant="contained"> Login </Button>
           <GoogleLogin />
         <button onClick ={SignIn}>Login with firebase</button>

        </form>
      </div>
    </div>
  );
}

export default Sign;
