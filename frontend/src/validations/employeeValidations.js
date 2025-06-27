import * as Yup from "yup";

export const employeeRegisterSchema = Yup.object({
  firstName: Yup.string().required("First name is required").min(3,"Minimum 3 characters required"),
  lastName: Yup.string().required("Last name is required").min(1,"Minimum 1 characters required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const employeeLoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});
