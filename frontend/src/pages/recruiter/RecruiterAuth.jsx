import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRecruiterContext } from "../../context/RecruiterContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import {
  recruiterRegisterSchema,
  recruiterLoginSchema,
} from "../../validations/recruiterValidations";

const RecruiterAuth = () => {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const isSignup = mode === "signup";

  const { registerRecruiter, loginRecruiter } = useRecruiterContext();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      companyName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: isSignup ? recruiterRegisterSchema : recruiterLoginSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        let data;
        if (isSignup) {
          data = await registerRecruiter(values);
          toast.success("Registration successful!");
        } else {
          data = await loginRecruiter(values);
          toast.success("Login successful!");
        }

        resetForm();
        navigate(`/recruiter/dashboard/${data._id}`);
      } catch (err) {
        const message =
          err?.response?.data?.message ||
          err?.message ||
          "Something went wrong";
        toast.error(message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          {isSignup ? "Recruiter Sign Up" : "Recruiter Login"}
        </h2>

        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          {isSignup && (
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.companyName}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your company name"
              />
              {formik.touched.companyName && formik.errors.companyName && (
                <p className="text-sm text-red-500">
                  {formik.errors.companyName}
                </p>
              )}
            </div>
          )}

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-500">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 pr-10"
                placeholder="Enter your password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-sm text-red-500">{formik.errors.password}</p>
            )}
          </div>

          {isSignup && (
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 pr-10"
                  placeholder="Re-enter your password"
                />
                <span
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-purple-600 text-white py-2 rounded-lg transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700"
            }`}
          >
            {loading ? "Please wait..." : isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            onClick={() => setMode(isSignup ? "login" : "signup")}
            className="text-purple-600 font-semibold cursor-pointer hover:underline"
          >
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default RecruiterAuth;
