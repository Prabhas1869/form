import * as Yup from "yup";
import "yup-phone";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Invalid name")
    .required("Required")
    .min(3, "Minimum 3 Characters required"),

  email: Yup.string().required("Required").email("Invalid Email"),

  number: Yup.string().phone("invalid number").required("Required"),
  password: Yup.string()
    .required("Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
  file: Yup.mixed()
    .required("Required")
    .test("fileSize", "File Too Large", (value) => {
      let valid = true;

      if (value && value.size) {
        valid = value.size / 1024 / 1024 > 2 ? false : true;
      } else {
        valid = false;
      }

      return valid;
    })
    .test("fileFormat", "Unsupported Format", (value) => {
      return value && SUPPORTED_FORMATS.includes(value.type);
    }),
});
