// src/components/RecruiterNavbar.jsx
import { FaSignOutAlt } from "react-icons/fa";

const RecruiterNavbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-purple-700">Company Name</h1>
      <button className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700 transition">
        <FaSignOutAlt />
        Logout
      </button>
    </nav>
  );
};

export default RecruiterNavbar;
