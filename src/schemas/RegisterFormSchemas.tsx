import * as yup from "yup";

export const registerFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email address.")
    .required("This field is required."),
  password: yup.string().
  min(6,"Create a password at least 6 characters long.").
  required("This field is required."),
  fullname: yup
    .string()
    .required("This field is required."),
  username: yup
    .string()
    .required("This field is required."),
});