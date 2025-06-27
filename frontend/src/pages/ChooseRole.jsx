import { FaUserTie, FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ChooseRole = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Choose Your Role
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link to={"/employee/auth"}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer transition"
            >
              <div className="flex flex-col items-center space-y-4">
                <FaUserGraduate className="text-blue-500 text-4xl" />
                <h2 className="text-xl font-semibold text-gray-700">
                  Job Seeker
                </h2>
                <p className="text-sm text-gray-500">
                  Find your dream job and apply easily.
                </p>
              </div>
            </motion.div>
          </Link>
          <Link to={'/recruiter/auth'}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer transition"
          >
            <div className="flex flex-col items-center space-y-4">
              <FaUserTie className="text-purple-500 text-4xl" />
              <h2 className="text-xl font-semibold text-gray-700">Recruiter</h2>
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
