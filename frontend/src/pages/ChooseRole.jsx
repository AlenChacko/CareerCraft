import React from "react";
import { FaUserTie, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const ChooseRole = () => {
  const navigate = useNavigate();
  const { setRole } = useAuthContext();

  const handleSelect = (role) => {
    setRole(role); 
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center px-4">
      <div className="text-center max-w-xl w-full">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Welcome to CareerCraft
        </h1>
        <p className="text-gray-700 text-lg mb-10">
          Please select your role to continue
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <div
            onClick={() => handleSelect("employee")}
            className="cursor-pointer bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-lg p-8 flex-1 hover:scale-105 transition transform duration-300 border border-gray-200"
          >
            <FaUserAlt className="text-5xl mx-auto text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold text-blue-800">Job Seeker</h2>
            <p className="text-sm text-gray-600 mt-2">
              Browse jobs and apply to your dream role.
            </p>
          </div>

          <div
            onClick={() => handleSelect("recruiter")}
            className="cursor-pointer bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-lg p-8 flex-1 hover:scale-105 transition transform duration-300 border border-gray-200"
          >
            <FaUserTie className="text-5xl mx-auto text-green-600 mb-4" />
            <h2 className="text-xl font-semibold text-green-800">Recruiter</h2>
            <p className="text-sm text-gray-600 mt-2">
              Post jobs and find the best candidates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
