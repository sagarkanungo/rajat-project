// signupSchema.js
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  dob: yup.date().required("Date of birth is required"),
  country: yup.string().required("Country is required"),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  phoneNumber: yup.string().required("Phone number is required").matches(/^[0-9]+$/, "Phone number must be numeric"),
});

export default SignupSchema;
