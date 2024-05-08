import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("Enter valid email").required("email is required"),
  password: yup.string().required("password is required"),
});

export const registerSchema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});
