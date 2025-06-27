import { FaUserTie, FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, Navigate } from "react-router-dom";
import { useEmployeeContext } from "../context/EmployeeContext";
import { useRecruiterContext } from "../context/RecruiterContext";

const ChooseRole = () => {
  const { employeeInfo } = useEmployeeContext();
  const { recruiterInfo } = useRecruiterContext();

  // 🔐 Redirect if already logged in
  if (employeeInfo?.token) {
    return <Navigate to={`/employee/dashboard/${employeeInfo._id}`} replace />;
  }

  if (recruiterInfo?.token) {
    return <Navigate to={`/recruiter/dashboard/${recruiterInfo._id}`} replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="max-w-md w-full text-center">
        {/* Project Title */}
        <motion.h1
          whileHover={{ scale: 1.03 }}
          className="text-4xl font-extrabold mb-2 cursor-pointer transition-colors duration-300"
        >
          <span className="text-purple-600 hover:text-blue-600 transition-colors duration-300">
            Career
          </span>
          <span className="text-blue-600 hover:text-purple-600 transition-colors duration-300">
            Craft
          </span>
        </motion.h1>

        <p className="text-sm text-gray-600 mb-8">
          Empowering careers, one match at a time.
        </p>

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Choose Your Role</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link to={"/employee/auth"}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer transition"
            >
              <div className="flex flex-col items-center space-y-4">
                <FaUserGraduate className="text-blue-500 text-4xl" />
                <h3 className="text-xl font-semibold text-gray-700">
                  Job Seeker
                </h3>
                <p className="text-sm text-gray-500">
                  Find your dream job and apply easily.
                </p>
              </div>
            </motion.div>
          </Link>

          <Link to={"/recruiter/auth"}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer transition"
            >
              <div className="flex flex-col items-center space-y-4">
                <FaUserTie className="text-purple-500 text-4xl" />
                <h3 className="text-xl font-semibold text-gray-700">
                  Recruiter
                </h3>
                <p className="text-sm text-gray-500">
                  Post jobs and hire top talent.
                </p>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
