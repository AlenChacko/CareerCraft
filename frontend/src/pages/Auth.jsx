import { useFormik } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "../context/AuthContext";
import {
  signUpValidationSchema,
  loginValidationSchema,
  recruiterSignUpSchema,
  recruiterLoginSchema,
} from "../validations/authValidation";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const { role } = useAuthContext(); // ✅ Use context role only

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema:
      role === "recruiter"
        ? isLogin
          ? recruiterLoginSchema
          : recruiterSignUpSchema
        : isLogin
        ? loginValidationSchema
        : signUpValidationSchema,
    onSubmit: (values) => {
      console.log(isLogin ? "Logging in..." : "Registering...", values, role);
    },
    validateOnBlur: true,
    validateOnChange: true,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          {isLogin
            ? `CareerCraft ${role === "recruiter" ? "Recruiter" : "Job Seeker"} Login`
            : `CareerCraft ${role === "recruiter" ? "Recruiter" : "Job Seeker"} Sign Up`}
        </h2>

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {/* Employee Sign Up - First & Last Name */}
          {!isLogin && role === "employee" && (
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className="text-sm text-red-600 mt-1">
                    {formik.errors.firstName}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="text-sm text-red-600 mt-1">
                    {formik.errors.lastName}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Recruiter Sign Up - Company Name Only */}
          {!isLogin && role === "recruiter" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Acme Corp"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.companyName}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {formik.touched.companyName && formik.errors.companyName && (
                <p className="text-sm text-red-600 mt-1">
                  {formik.errors.companyName}
                </p>
              )}
            </div>
          )}

          {/* Common: Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-600 mt-1">
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Common: Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div
              className="absolute top-9 right-3 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-sm text-red-600 mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password only for signup */}
          {!isLogin && (
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="••••••••"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div
                className="absolute top-9 right-3 text-gray-500 cursor-pointer"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className="text-sm text-red-600 mt-1">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700 transition"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>

          {/* Google Login only for employee */}
          {isLogin && role === "employee" && (
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 mt-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              <FcGoogle className="text-xl" />
              <span className="text-sm font-medium text-gray-700">
                Continue with Google
              </span>
            </button>
          )}
        </form>

        {/* Switch Login/Register */}
        <p className="text-center text-sm text-gray-600 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            {isLogin ? "Register" : "Log In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
