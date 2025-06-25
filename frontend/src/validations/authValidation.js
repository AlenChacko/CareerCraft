import * as Yup from "yup";

// Employee Sign Up
export const signUpValidationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "First name is too short")
    .required("First name is required"),
  lastName: Yup.string()
    .min(1, "Last name is too short")
    .required("Last name is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be at most 12 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

// Employee Login
export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

// Recruiter Sign Up
export const recruiterSignUpSchema = Yup.object({
  companyName: Yup.string()
    .min(2, "Company name is too short")
    .required("Company name is required"),
  recruiterName: Yup.string()
    .min(2, "Recruiter name is too short")
    .required("Recruiter name is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be at most 12 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

// Recruiter Login
export const recruiterLoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});
