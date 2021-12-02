import { useFormik } from "formik";
import Input from "../Input";
import { Button } from "@mui/material";
import { validationSchema } from "../../Schemas/FormSchema";
import Image from "../Image";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
function Sign() {
  const {
    handleSubmit,
    values,
    touched,
    errors,
    user,
    getFieldProps,
    setFieldValue,
  } = useFormik({
    initialValues: {
      address: "",
      name: "",
      email: "",
      password: "",
      number: "",
      file: undefined,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });


  return (
    <div className="App">
      <div className="form_container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} method = 'POST'>
          <Image
            onChange={(e) => {
              console.log(e.target.files);
              setFieldValue("file", e.target.files[0]);
            }}
            name={"file"}
            value={values.file}
            setFieldValue={setFieldValue}
          />

          {errors.file ? (
            <div className="errorMessage">*{errors.file}</div>
          ) : null}
          <h3 className="upload">Upload Your Image</h3>
             <Input
            value={values.name}
            icon={"fas fa-male"}
            placeholder={"username"}
            {...getFieldProps("name")}
          />

          {touched.name && errors.name ? (
            <div className="errorMessage">*{errors.name}</div>
          ) : null}
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
            value={values.address}
            icon={"fas fa-home"}
            placeholder={"address"}
            {...getFieldProps("address")}
          />

          {touched.address && errors.address ? (
            <div className="errorMessage">*{errors.address}</div>
          ) : null}

          <Input
            icon={"fas fa-mobile-alt"}
            placeholder={"Phone Number"}
            type="text"
            {...getFieldProps("number")}
          />
          {touched.number && errors.number ? (
            <div className="errorMessage">*{errors.number}</div>
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
          <FormControlLabel control={<Checkbox  />} label="Remember me" />
          <div className ="div">
          <Button type={"submit"} className="btn"  variant="contained"  >
            Sign Up
          </Button>
          <Link to = "/Login" className="btn"    >
            Sign In
          </Link>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Sign;
